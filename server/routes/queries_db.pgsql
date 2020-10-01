-- -- user logged in (user)
-- -- list of potlucks


-- -- events
-- SELECT *
-- FROM events
-- WHERE id = 1;

-- --users
-- SELECT USERS.first_name, USERS.last_name,
--        USERS.email, USERS.avatar_url
-- FROM GUEST_DETAILS
-- JOIN USERS ON GUEST_DETAILS.user_id = USERS.ID
-- WHERE event_id = 1 OR user_id = 1;

-- --items
-- SELECT ITEMS.name, CATEGORIES.name
-- FROM ITEMS
-- JOIN CATEGORIES ON ITEMS.category_id = CATEGORIES.id
-- JOIN GUEST_ITEMS ON ITEMS.id = GUEST_ITEMS.item_id
-- JOIN USERS ON USERS.id = GUEST_ITEMS.guest_id;

-- -- event_messages
-- SELECT *
-- FROM event_messages
-- WHERE event_id = 1
-- ORDER BY id;


-- events
SELECT DISTINCT events.id AS id,
       events.owner_id AS owner_id,
       events.name AS event_name, 
       events.date AS date, 
       events.address AS address,
       events.post_code AS post_code,
       events.city AS city,
       events.province AS province
FROM guest_details
JOIN events ON events.id = guest_details.event_id
JOIN items ON events.id = items.event_id
JOIN users ON users.id = guest_details.user_id
WHERE events.id IN(SELECT event_id
FROM guest_details
WHERE user_id = 1);