INSERT INTO users (first_name, last_name, password, email, avatar_url) VALUES
('Daniel', 'Nascimento', '1', 'daniel@email.com', 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg'),
('Devin', 'Coughlin', '1', 'devin@email.com', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg'),
('Michele', 'Barbiero', '1','michele@email.com', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY256_CR4,0,172,256_AL_.jpg'),
('Donald', 'Chavez', '1', 'donald@email.com', 'https://randomuser.me/api/portraits/men/61.jpg'),
('Crazy', 'Dude', '1', 'crazy@email.com', 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ddcb7ec744fc63472f2d9e19362aa387'),
('Georgina', 'Campbell','1' ,'georgina@email.com', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDgyMDc2NDgtN2JkMy00NjM0LWIzMjQtZGFiZjc1ZDU4ZWU4XkEyXkFqcGdeQXVyMjg5MDk0NTA@._V1_UY256_CR16,0,172,256_AL_.jpg'),
('June', 'Hong', '1', 'june@email.com', 'https://uifaces.co/our-content/donated/uPzg0frZ.jpg');


INSERT INTO events (owner_id, date, address, post_code, city, province) VALUES
(1, '2020-12-20 10:30:01', '30 Some Road', 'M3F6D4', 'Toronto', 'Ontario'),
(2, '2020-11-25 06:30:01', '15 Any Court', 'F3Z7D5', 'Ottawa', 'Ontario'),
(3, '2020-11-25 06:30:01', '15 Any Court', 'F3Z7D5', 'Ottawa', 'Ontario');

INSERT INTO categories (name) VALUES
('Appetizer'),
('Main'),
('Dessert');

INSERT INTO items (event_id, category_id, name) VALUES
(1, 1, 'Nuts'),
(1, 2, 'Lamb'),
(1, 3, 'Ice cream'),
(2, 1, 'Cheese'),
(2, 2, 'Pork'),
(2, 3, 'Chocolate cookies'),
(3, 1, 'Potato chips'),
(3, 2, 'Lasagna'),
(3, 3, 'Petit gateau');


INSERT INTO guest_details (event_id, user_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 2),
(2, 4),
(2, 5),
(3, 3),
(3, 6),
(3, 7);

INSERT INTO guest_items (item_id, guest_id) VALUES
(1 ,1),
(2, 2),
(3, 3),
(4, 2),
(5, 4),
(6, 5),
(7, 3),
(8, 6),
(9, 7);

INSERT INTO event_messages (event_id, user_id, message) VALUES
(1, 1, 'This is a MESSAGE for EVENT 1 !'),
(2, 2, 'This is a MESSAGE for EVENT 2 !'),
(3, 3, 'This is a MESSAGE for EVENT 3 !');

INSERT INTO event_comments (event_id, user_id, message) VALUES
(1, 1, 'This is a COMMENT for EVENT 1 !'),
(2, 2, 'This is a COMMENT for EVENT 2 !'),
(3, 3, 'This is a COMMENT for EVENT 3 !');

INSERT INTO custom_recipes (user_id, category_id, name, ingredients, instructions,  picture_url) VALUES
(4, 1, 'NoFrills nuts', 'Almonds, cashews, brazil nuts', '1) Grab your wallet; 2) go to NoFrills; 3)buy', 'https://scontent.fymy1-2.fna.fbcdn.net/v/t1.0-9/p720x720/117269134_1245731339152505_8549505575835967506_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=OR8jS7lGiIQAX_zEiA-&_nc_ht=scontent.fymy1-2.fna&tp=6&oh=3e869df797b6d4b026088c246f31b5d8&oe=5F7EA889'),
(5, 2, 'Grandmas Secret Pie', 'Classifed', 'Classifed', 'https://d2culxnxbccemt.cloudfront.net/craft/content/uploads/articles/uploads/2013/12/20120916-221984-avopie4-thumb-514x385-271847.jpg'),
(6, 3, 'Famous chicken wings from Sahara', 'Chicken and wing', 'Are there chickens in Sahara?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR022Bpb5JjwBLLlm1QEmeY5B78w2dhgcePlg&usqp=CAU');

INSERT INTO favorites (user_id, recipe_id) VALUES
(4, 1),
(5, 2),
(6, 3);

