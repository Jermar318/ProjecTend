-- Insert sample data into the User table
INSERT INTO users (username, password, email) VALUES
('user1', 'password1', 'user1@example.com'),
('user2', 'password2', 'user2@example.com'),
('user3', 'password3', 'user3@example.com');

-- Insert sample data into the boards table
-- Assuming user_id values are correct and users exist
INSERT INTO boards (title, description, user_id) VALUES
('Board 1', 'Description for Board 1', 1),
('Board 2', 'Description for Board 2', 1),
('Board 3', 'Description for Board 3', 2);

-- Insert sample data into the cards table
-- Assuming these cards belong to the first board
INSERT INTO cards (title, description, status, boardId, assignee user_id) VALUES
('Card 1 for Board 1', 1),
('Card 2 for Board 1', 1),
('Card 3 for Board 1', 1);