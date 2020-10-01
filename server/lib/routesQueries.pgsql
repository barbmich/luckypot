-- -- SELECT USER FROM DB
-- SELECT * FROM USERS
-- WHERE email = 'daniel@email.com' AND password = '1';

-- -- events
-- SELECT DISTINCT events.id AS id,
--        events.owner_id AS owner_id,
--        events.name AS event_name, 
--        events.date AS date, 
--        events.address AS address,
--        events.post_code AS post_code,
--        events.city AS city,
--        events.province AS province
-- FROM guest_details
-- JOIN events ON events.id = guest_details.event_id
-- JOIN items ON events.id = items.event_id
-- JOIN users ON users.id = guest_details.user_id
-- WHERE events.id IN(SELECT event_id
-- FROM guest_details
-- WHERE user_id = 1);

-- -- users
-- SELECT events.id AS event_id,
--        users.id AS id,
--        users.first_name AS first_name, 
--        users.last_name AS first_name,events.date, 
--        users.email AS email, 
--        users.avatar_url AS avatar_url
-- FROM guest_details
-- JOIN events ON events.id = guest_details.event_id
-- JOIN items ON events.id = items.event_id
-- JOIN users ON users.id = guest_details.user_id
-- WHERE events.id IN(SELECT event_id
-- FROM guest_details
-- WHERE user_id = 1);

-- -- messages
-- SELECT id, event_id, user_id, message, date AS timestamp 
-- FROM event_messages;


-- OTHER RANDOM QUERIES

-- -- -- SELECT WHO IS ATTENDING AN EVENT
-- SELECT GUEST_DETAILS.* , USERS.first_name, USERS.last_name
-- FROM GUEST_DETAILS
-- JOIN USERS ON GUEST_DETAILS.user_id = USERS.ID
-- WHERE event_id = 1;

-- SELECT GUEST_DETAILS.* , USERS.first_name, USERS.last_name
-- FROM GUEST_DETAILS
-- JOIN USERS ON GUEST_DETAILS.user_id = USERS.ID
-- WHERE event_id = 2;

-- -- -- SELECT ITEMS FOR AN EVENT, THEIR NAMES, CATEGORIES AND WHO IS BRINGING THEN
-- SELECT ITEMS.*
-- FROM ITEMS
-- JOIN CATEGORIES ON ITEMS.category_id = CATEGORIES.id
-- JOIN GUEST_ITEMS ON ITEMS.id = GUEST_ITEMS.item_id
-- JOIN USERS ON USERS.id = GUEST_ITEMS.guest_id;

-- -- -- SELECT FAVORITES
-- -- SELECT recipe_id
-- -- FROM FAVORITES
-- -- WHERE user_id = 4;

-- -- -- SELECT DETAILS FROM A FAVED RECIPE
-- -- SELECT CUSTOM_RECIPES.name, CUSTOM_RECIPES.ingredients, CUSTOM_RECIPES.instructions
-- -- FROM CUSTOM_RECIPES
-- -- WHERE CUSTOM_RECIPES.user_id = 4;  

-- -- DASHBOARD QUERY (guests, meals, event info)
-- SELECT events.*
-- FROM events;

-- -- WHERE events.owner_id = 1;
