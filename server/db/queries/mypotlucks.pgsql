INSERT INTO events (owner_id, name, date, address, post_code, city, province) VALUES
(1, 'Best party ever', '2020-12-31 22:00:00', '2nd Street', 'S4T 4N4', 'Montreal', 'Quebec') RETURNING *;