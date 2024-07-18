DROP DATABASE IF EXISTS projectend_db;
CREATE DATABASE projectend_db;

\c projectend_db;
SELECT projectend_db();

CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Board (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE Card (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    board_id INT NOT NULL,
    assignee_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
    FOREIGN KEY (board_id) REFERENCES Board(id)
    FOREIGN KEY (assignee_id) REFERENCES User(id)
);
