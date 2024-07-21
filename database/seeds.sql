-- Insert sample data into the User table
TRUNCATE TABLE "user";
INSERT INTO "user" (email, password) VALUES
('user1@example.com', 'password1'),
('user2@example.com', 'password2'),
('user3@example.com', 'password3');

-- Insert sample data into the boards table
-- Assuming user_id values are correct and users exist
-- INSERT INTO boards (title, description) VALUES
-- ('Board 1', 'Description for Board 1'),
-- ('Board 2', 'Description for Board 2'),
-- ('Board 3', 'Description for Board 3');

-- Insert sample data into the cards table
-- Assuming these cards belong to the first board
TRUNCATE TABLE cards;
INSERT INTO cards (title, description, status, assignee) VALUES
('Card 1', 'Description for Card 1', 'todo', 'user1@example.com'),
('Card 2', 'Description for Card 2', 'in-progress', 'user2@example.com'),
('Card 3', 'Description for Card 3', 'done', 'user3@example.com');