INSERT INTO users (first_name, last_name, password, email, avatar_url) VALUES
('Daniel', 'Nascimento', '1', 'daniel@email.com', 'https://res.cloudinary.com/barbmich/image/upload/v1602039105/luckypot/compass_o6pdrk.png'),
('Michele', 'Barbiero', '1','michele@email.com', 'https://res.cloudinary.com/barbmich/image/upload/v1601779428/luckypot/test25%40test.jpg'),
('Devin', 'Coughlin', '1', 'devin@email.com', 'https://res.cloudinary.com/barbmich/image/upload/v1602039113/luckypot/headshot_zv7spf.jpg'),
('Donald', 'Chavez', '1', 'donald@email.com', 'https://randomuser.me/api/portraits/men/61.jpg'),
('Crazy', 'Dude', '1', 'crazy@email.com', 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ddcb7ec744fc63472f2d9e19362aa387'),
('Georgina', 'Campbell','1' ,'georgina@email.com', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDgyMDc2NDgtN2JkMy00NjM0LWIzMjQtZGFiZjc1ZDU4ZWU4XkEyXkFqcGdeQXVyMjg5MDk0NTA@._V1_UY256_CR16,0,172,256_AL_.jpg'),
('June', 'Hong', '1', 'june@email.com', 'https://uifaces.co/our-content/donated/uPzg0frZ.jpg');


INSERT INTO events (owner_id, name, date, address, post_code, city, province, tiny_url, unique_key) VALUES
(1, 'Thanksgiving Feast','2020-10-11 11:30:00', '30 Some Road', 'M3F6D4', 'Toronto', 'Ontario', 'https://tinyurl.com/y6tnkqam', 'z3sfpr2xdd'),
(1, 'Christmas Party','2020-12-24 18:30:00', '54 Albert Street', 'H3Z7F7', 'Montreal', 'Quebec', 'https://tinyurl.com/y5azzfw6', '8tspr0msfq'),
(3, 'Canada Day BBQ','2021-07-01 12:30:01', '15 Any Court', 'F3Z7D5', 'Ottawa', 'Ontario', 'https://tinyurl.com/y5qok3ag', '603zs7066p');


INSERT INTO categories (name) VALUES
('Appetizer'),
('Main'),
('Dessert');

INSERT INTO items (event_id, category_id, name, recipe_id, assigned) VALUES
(1, 1, 'Turkey', 645044, 1);


INSERT INTO items (event_id, category_id, name) VALUES
(1, 1, 'Salad'),
(1, 1, 'Apple pie'),
(1, 1, 'Mashed potatoes');


INSERT INTO guest_details (event_id, user_id, present) VALUES
(1, 1, 2),
(1, 3, 2),
(1, 4, 1),
(1, 5, 2),
(1, 6, 1),
(1, 7, 0),
(2, 2, 2),
(2, 4, 1),
(2, 5, 1),
(3, 1, 2),
(3, 6, 1),
(3, 7, 1);

INSERT INTO guest_items (item_id, guest_id) VALUES
(1 ,1),
(2, 2),
(3, 3),
(4, 2);
-- (5, 4),
-- (6, 5),
-- (7, 3),
-- (8, 6),
-- (9, 7);

INSERT INTO event_messages (event_id, user_id, message) VALUES
(1, 1, 'Hey people! Only a few days to this... I can''t wait!'),
(1, 3, 'Hey Daniel! Same here, it''s going to be lit. Do you know if Michele is coming?'),
(2, 2, 'This is MESSAGE 1 for EVENT 2 !'),
(3, 3, 'This is MESSAGE 1 for EVENT 3 !');

INSERT INTO event_comments (event_id, user_id, message) VALUES
(1, 1, 'This is a COMMENT for EVENT 1 !'),
(2, 2, 'This is a COMMENT for EVENT 2 !'),
(3, 3, 'This is a COMMENT for EVENT 3 !');

INSERT INTO custom_recipes (user_id, category_id, name, ingredients, instructions,  picture_url) VALUES
(4, 1, 'NoFrills nuts', 'Almonds, cashews, brazil nuts', '1) Grab your wallet; 2) go to NoFrills; 3)buy', 'https://i.imgur.com/6RpiqFZ.jpeg'),
(5, 2, 'Grandmas Secret Pie', 'Classifed', 'Classifed', 'https://i.imgur.com/FLPeldk.jpg'),
(6, 3, 'Famous chicken wings from Sahara', 'Chicken and wing', 'Are there chickens in Sahara?', 'https://i.imgur.com/nWJPyff.jpg'),
(2, 3, 'Fresh Caprese Salad', 'Mozzerella, Balsamic Vinegar, Tomato', 'Cut, Combine, Drizzle, and Enjoy!', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/18/0/WU0314H_caprese-salad-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1530799895174.jpeg'),
(1, 3, 'Cheeseburger Sliders', 'Bun, ground Beef, tomato, onion', 'Toss them on the bbq, season to taste and serve', 'https://natashaskitchen.com/wp-content/uploads/2020/03/Cheeseburger-Sliders-4-728x1092.jpg'),
(2, 3, 'Double chocolate cookies', 'Flour, sugar, butter, baking powder, chocolate chips', 'combine and bake for 30 minutes at 350F', 'https://i.imgur.com/R1FZ54b.jpeg'),
(6, 3, 'Lava Cake', 'Chocolate, Chocolate, Chocolate and MORE Chocolate', 'Cook at 375F for 20 minutes, let cool and enjoy!', 'https://i.imgur.com/Ug7qbWu.jpg'),
(3, 3, 'Lasagna', 'Tomato sauce, ricotta, parmesan, noodles, mozzerella cheese', 'Boil noodles until soft, layer noodles and ricotta until pan is almost full. Bake at 375F for 60 minutes', 'https://i.imgur.com/haB36HO.jpeg'),
(1, 3, 'Chocolate Brownie Explosion Cake', 'Flour, sugar, butter, baking powder, chocolate chips', 'combine and bake for 30 minutes at 350F. Combine and Enjoy!', 'https://i.imgur.com/BgAvBzn.jpg');

INSERT INTO favorites (user_id, recipe_id) VALUES
(4, 1),
(5, 2),
(5, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(1, 8),
(1, 9);



