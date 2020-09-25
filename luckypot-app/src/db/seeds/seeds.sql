INSERT INTO users (first_name, last_name, password, email, avatar_url) VALUES
("Daniel", "Nascimento", "1", "daniel@email.com", "https://uifaces.co/our-content/donated/XdLjsJX_.jpg"),
("Devin", "Coughlin", "1", "devin@email.com", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"),
("Michele", "Barbiero", "1","michele@email.com", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY256_CR4,0,172,256_AL_.jpg");

INSERT INTO events (owner_id, date, address, post_code, city, province) VALUES
(1, "2020-12-20 10:30:01", "30 Some Road", "M3F6D4", "Toronto", "Ontario"),
(2, "2020-11-25 06:30:01", "15 Any Court", "F3Z7D5", "Ottawa", "Ontario"),
(3, "2020-11-25 06:30:01", "15 Any Court", "F3Z7D5", "Ottawa", "Ontario");

INSERT INTO items (event_id, category_id, name, ) VALUES
(1),
(2),
(3);

INSERT INTO categories (event_id, category_id, name, ) VALUES
(),
(),
();

INSERT INTO guest_details (event_id, user_id) VALUES
(),
(),
();

INSERT INTO guest_items (item_id, guest_id) VALUES
(),
(),
();

INSERT INTO event_messages (name) VALUES
(),
(),
();

INSERT INTO event_comments (name) VALUES
(),
(),
();







