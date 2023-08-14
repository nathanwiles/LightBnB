INSERT INTO users (name, email, password) 
VALUES ('John Doe', 'jd@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Harry Houdini', 'iescaped@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO users (name, email, password)
VALUES ('Dwight Schrute', 'beetsbeetsbeets@beets.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 'Beautiful Downtown Apartment', 'This is a gorgeous apartment located in downtown Toronto, with a great view of the CN Tower.', 'thumbnail/photo.url', 'cover/photo.url', 100, 1, 1, 1, 'Canada', '123 Main Street', 'Toronto', 'Ontario', 'M1M 1M1', TRUE);

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (2, 'The Cozy Cabin', 'This is a cozy cabin located in the woods, with a great view of the forest.', 'thumbnail/photo.url', 'cover/photo.url', 50, 4, 1, 1, 'Canada', '123 Forrest Drive', 'Milton', 'Ontario', 'M1M 1M1', TRUE);

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (3, 'Schrute Farms', 'This is a beautiful farm located in the middle of nowhere, with a great view of the beets.', 'thumbnail/photo.url', 'cover/photo.url', 100, 1, 1, 1, 'Canada', '123 Beet Street', 'Beetsville', 'Ontario', 'M1M 1M1', TRUE);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2020-12-01', '2020-12-05', 1, 2);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2021-04-04', '2020-04-06', 2, 3);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2021-05-01', '2020-05-05', 3, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (2, 1, 1, 5, 'This place was great!');

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (3, 2, 2, 1, 'This place was terrible, there was a distinct lack of beets.');

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 3, 3, 4, 'This place was nice, i don''t know what''s up with all the beets.');