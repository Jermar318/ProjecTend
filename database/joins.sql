--JOIN between users and board
SELECT users.username, board.title
FROM users
INNER JOIN board ON users.id = board.user_id;

--JOIN between board and card
SELECT board.title, card.title AS card_title
FROM board
LEFT JOIN card ON board.id = card.board_id;

--JOIN between card and comments
SELECT card.title AS card_title, comments.content
FROM card
FULL OUTER JOIN comments ON card.id = comments.card_id;

--JOIN within users through card
SELECT a.username AS Assigner, b.username AS Assignee
FROM users a
JOIN card ON a.id = card.user_id
JOIN users b ON card.assignee_id = b.id;