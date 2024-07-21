// Function to create a new card element
function createCard(id, title, description, assigneeEmail) {
  var card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2 data-id=${id}>${title}</h2><p><strong>${assigneeEmail}</strong>: ${description}</p>`;

  // Delete button
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function () {
    card.parentNode.removeChild(card);
    // Call the DELETE card API
    fetch(`/api/cards/${id}`, {
      method: 'DELETE'
    });

    updateProgressBar(); // Update progress bar after being deleted
  });

  card.appendChild(deleteBtn);

  return card;
}

// Initialize Sortable for each column
var sortableOptions = {
  group: 'shared', // Enable dragging between lists with the same group name
  animation: 150, // Animation duration in milliseconds
  onEnd: function (event) {
    // Callback function when an item is dropped
    var itemEl = event.item; // dragged HTMLElement
    var columnId = itemEl.parentNode.id; // ID of the column where item was dropped
    console.log('Item dropped in column:', columnId);

    console.log(itemEl.querySelector('h2').getAttribute('data-id'));

    // Call the PUT card API
    fetch(`/api/cards/${itemEl.querySelector('h2').getAttribute('data-id')}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: columnId.replace('-list', '')
      })
    });

    updateProgressBar();
  }
};

Sortable.create(document.getElementById('todo-list'), sortableOptions);
Sortable.create(document.getElementById('in-progress-list'), sortableOptions);
Sortable.create(document.getElementById('done-list'), sortableOptions);

// Function to update progress bar
function updateProgressBar() {
  // fix this!
  var inProgressCount = document.getElementById('in-progress-list').children.length;
  var doneCount = document.getElementById('done-list').children.length;
  var todoCount = document.getElementById('todo-list').children.length;

  // Calculate percentage completion
  var totalTasks = inProgressCount + doneCount + todoCount;
  var progressPercent = totalTasks > 0 ? Math.floor((doneCount / totalTasks) * 100) : 0;

  // Update progress bar width
  document.querySelector('.progress-bar-inner').style.width = progressPercent + '%';
}

// Initialize progress bar to 0% initially
updateProgressBar();

// Handle form submission for Todo column
var formTodo = document.getElementById('form-todo');
formTodo.addEventListener('submit', function (event) {
  event.preventDefault();
  var cardTitle = document.getElementById('new-card-title-todo').value.trim();
  var cardDescription = document.getElementById('new-card-description-todo').value.trim();
  var assignee = document.getElementById('new-card-assignee-todo').value.trim();

  if (cardDescription !== '') {
    // Call API
    const response = fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: cardTitle,
        description: cardDescription,
        assignee: assignee,
        status: 'todo'
      })
    });

    response
      .then((response) => {
        if (response.status >= 400) {
          alert('Error adding card:', response);
          return;
        }
        response.json().then((data) => {
          console.log(data);
          var card = createCard(data.id, cardTitle, cardDescription, assignee);
          document.getElementById('todo-list').appendChild(card);
          document.getElementById('new-card-description-todo').value = '';
          document.getElementById('new-card-assignee-todo').value = '';

          // After adding a card to In Progress, update progress bar
          updateProgressBar();
        });
      })
      .catch((error) => {
        alert('Error adding card:', error);
      });
  }
});

// Handle form submission for In Progress column
var formInProgress = document.getElementById('form-in-progress');
formInProgress.addEventListener('submit', function (event) {
  event.preventDefault();
  var cardTitle = document.getElementById('new-card-title-in-progress').value.trim();
  var cardDescription = document.getElementById('new-card-description-in-progress').value.trim();
  var assignee = document.getElementById('new-card-assignee-in-progress').value.trim();

  if (cardDescription !== '') {
    const response = fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: cardTitle,
        description: cardDescription,
        assignee: assignee,
        status: 'in-progress'
      })
    });

    response
      .then((response) => {
        if (response.status >= 400) {
          alert('Error adding card:', response);
          return;
        }
        response.json().then((data) => {

          var card = createCard(data.id, cardTitle, cardDescription, assignee);
          document.getElementById('in-progress-list').appendChild(card);
          document.getElementById('new-card-description-in-progress').value = '';
          document.getElementById('new-card-assignee-in-progress').value = '';

          // After adding a card to In Progress, update progress bar
          updateProgressBar();
        });
      })
      .catch((error) => {
        alert('Error adding card:', error);
      });
  }
});

// Handle form submission for Done column
var formDone = document.getElementById('form-done');
formDone.addEventListener('submit', function (event) {
  event.preventDefault();
  var cardTitle = document.getElementById('new-card-title-done').value.trim();
  var cardDescription = document.getElementById('new-card-description-done').value.trim();
  var assignee = document.getElementById('new-card-assignee-done').value.trim();

  if (cardDescription !== '') {
    const response = fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: cardTitle,
        description: cardDescription,
        assignee: assignee,
        status: 'done'
      })
    });

    response
      .then((response) => {
        if (response.status >= 400) {
          alert('Error adding card:', response);
          return;
        }
        response.json().then((data) => {

          var card = createCard(data.id, cardTitle, cardDescription, assignee);
          document.getElementById('done-list').appendChild(card);
          document.getElementById('new-card-description-done').value = '';
          document.getElementById('new-card-assignee-done').value = '';
          updateProgressBar();
        });
      })
      .catch((error) => {
        alert('Error adding card:', error);
      });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const todo_list = document.getElementById('todo-list');
  const in_progress_list = document.getElementById('in-progress-list');
  const done_list = document.getElementById('done-list');

  // Call /api/cards to get all cards
  fetch('/api/cards')
    .then((response) => response.json())
    .then((data) => {
      // Loop through each card and create a card element
      data.forEach((card) => {
        var cardElement = createCard(card.id, card.title, card.description, card.assignee);

        // Append card to the correct column based on status
        if (card.status === "todo") {
          todo_list.appendChild(cardElement);
        } else if (card.status === "in-progress") {
          in_progress_list.appendChild(cardElement);
        } else if (card.status === "done") {
          done_list.appendChild(cardElement);
        }
      });

      // Update progress bar after loading all cards
      updateProgressBar();
    })
    .catch((error) => console.error(error));
});
