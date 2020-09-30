-- user logged in (user)
-- list of potlucks


-- events
SELECT *
FROM events
WHERE id = 1;

--users
SELECT USERS.first_name, USERS.last_name,
       USERS.email, USERS.avatar_url
FROM GUEST_DETAILS
JOIN USERS ON GUEST_DETAILS.user_id = USERS.ID
WHERE event_id = 1;

--items
SELECT ITEMS.name, CATEGORIES.name
FROM ITEMS
JOIN CATEGORIES ON ITEMS.category_id = CATEGORIES.id
JOIN GUEST_ITEMS ON ITEMS.id = GUEST_ITEMS.item_id
JOIN USERS ON USERS.id = GUEST_ITEMS.guest_id;

-- event_messages
SELECT *
FROM event_messages
WHERE event_id = 1
ORDER BY id;