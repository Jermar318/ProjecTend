document.addEventListener('DOMContentLoaded', function() {
    // Function to create a new card element
    function createCard(content, assignee) {
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = '<p><strong>' + assignee + '</strong>: ' + content + '</p>';
      
      // Delete button
      var deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', function() {
        card.parentNode.removeChild(card);
        updateProgressBar(); // Update progress bar after being deleted
      });
      
      card.appendChild(deleteBtn);
      
      return card;
    }
  
    // Initialize Sortable for each column
    var sortableOptions = {
      group: 'shared', // Enable dragging between lists with the same group name
      animation: 150, // Animation duration in milliseconds
      onEnd: function(event) {
        // Callback function when an item is dropped
        var itemEl = event.item; // dragged HTMLElement
        var columnId = itemEl.parentNode.id; // ID of the column where item was dropped
        console.log('Item dropped in column:', columnId);
  
        // Check if item was dropped into Done column
        if (event.to.id === 'done-list') {
          updateProgressBar();
        } else if (event.from.id === 'done-list') {
          updateProgressBar();
        }
      }
    };
  
    Sortable.create(document.getElementById('unassigned-list'), sortableOptions);
    Sortable.create(document.getElementById('in-progress-list'), sortableOptions);
    Sortable.create(document.getElementById('done-list'), sortableOptions);
  
    // Function to update progress bar
    function updateProgressBar() {
      var inProgressCount = document.getElementById('in-progress-list').children.length;
      var doneCount = document.getElementById('done-list').children.length;
  
      // Calculate percentage completion
      var totalTasks = inProgressCount + doneCount;
      var progressPercent = totalTasks > 0 ? Math.floor((doneCount / totalTasks) * 100) : 0;
  
      // Update progress bar width
      document.querySelector('.progress-bar-inner').style.width = progressPercent + '%';
    }
  
    // Initialize progress bar to 0% initially
    updateProgressBar();
  
    // Handle form submission for Unassigned column
    var formUnassigned = document.getElementById('form-unassigned');
    formUnassigned.addEventListener('submit', function(event) {
      event.preventDefault();
      var cardContent = document.getElementById('new-card-content-unassigned').value.trim();
      var assignee = document.getElementById('new-card-assignee-unassigned').value.trim();
  
      if (cardContent !== '') {
        var card = createCard(cardContent, assignee);
        document.getElementById('unassigned-list').appendChild(card);
        document.getElementById('new-card-content-unassigned').value = '';
        document.getElementById('new-card-assignee-unassigned').value = '';
      }
    });
  
    // Handle form submission for In Progress column
    var formInProgress = document.getElementById('form-in-progress');
    formInProgress.addEventListener('submit', function(event) {
      event.preventDefault();
      var cardContent = document.getElementById('new-card-content-in-progress').value.trim();
      var assignee = document.getElementById('new-card-assignee-in-progress').value.trim();
  
      if (cardContent !== '') {
        var card = createCard(cardContent, assignee);
        document.getElementById('in-progress-list').appendChild(card);
        document.getElementById('new-card-content-in-progress').value = '';
        document.getElementById('new-card-assignee-in-progress').value = '';
  
        // After adding a card to In Progress, update progress bar
        updateProgressBar();
      }
    });
  
    // Handle form submission for Done column
    var formDone = document.getElementById('form-done');
    formDone.addEventListener('submit', function(event) {
      event.preventDefault();
      var cardContent = document.getElementById('new-card-content-done').value.trim();
      var assignee = document.getElementById('new-card-assignee-done').value.trim();
  
      if (cardContent !== '') {
        var card = createCard(cardContent, assignee);
        document.getElementById('done-list').appendChild(card);
        document.getElementById('new-card-content-done').value = '';
        document.getElementById('new-card-assignee-done').value = '';
  
        // After adding a card to Done, update progress bar
        updateProgressBar();
      }
    });
  
  });
  