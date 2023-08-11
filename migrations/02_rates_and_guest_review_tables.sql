DROP TABLE IF EXISTS rates CASCADE;
DROP TABLE IF EXISTS guest_reviews CASCADE;
CREATE TABLE IF NOT EXISTS rates (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE
  SET NULL,
    property_id INTEGER NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    cost_per_night INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS guest_reviews (
  id SERIAL PRIMARY KEY,
  guest_id INTEGER NOT NULL REFERENCES users(id) ON DELETE
  SET NULL,
    owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE
  SET NULL,
    reservation_id INTEGER NOT NULL REFERENCES reservations(id) ON DELETE
  SET NULL,
    rating SMALLINT NOT NULL DEFAULT 0,
    message TEXT
);