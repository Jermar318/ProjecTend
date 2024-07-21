-- Seed data for 'users'
INSERT INTO users (username, password, email) VALUES
('user1', 'password1', 'user1@example.com'),
('user2', 'password2', 'user2@example.com'),
('user3', 'password3', 'user3@example.com');

-- Seed data for 'board'
INSERT INTO board (title, description, user_id) VALUES
('Board 1', 'Description for Board 1', 1),
('Board 2', 'Description for Board 2', 2);

-- Seed data for 'card'
INSERT INTO card (title, description, status, user_id, board_id, assignee_id) VALUES
('Card 1', 'Description for Card 1', 'To Do', 1, 1, 2),
('Card 2', 'Description for Card 2', 'In Progress', 2, 1, 3),
('Card 3', 'Description for Card 3', 'Done', 3, 2, 1);

-- Insert sample data into the cards table
-- Assuming these cards belong to the first board
INSERT INTO cards (title, description, status, boardId, assignee user_id) VALUES
('Card 1 for Board 1', 1),
('Card 2 for Board 1', 1),
('Card 3 for Board 1', 1);