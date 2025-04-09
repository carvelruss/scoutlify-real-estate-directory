# Let's generate the full schema.sql file content based on the features and structure Carvel Russ provided.

schema_sql = """
-- ===================================
-- 🧑 USERS & AUTHENTICATION
-- ===================================
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'broker',
  short_bio TEXT,
  profile_image TEXT,
  phone TEXT,
  company TEXT,
  address TEXT,
  facebook TEXT,
  linkedin TEXT,
  twitter TEXT,
  instagram TEXT,
  pinterest TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  token TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS password_resets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  token TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- ===================================
-- 🏠 PROPERTY LISTINGS
-- ===================================
CREATE TABLE IF NOT EXISTS properties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  property_type TEXT NOT NULL,
  is_business INTEGER DEFAULT 0,
  country TEXT,
  province TEXT,
  city TEXT,
  barangay TEXT,
  street TEXT,
  zip_code TEXT,
  map_lat REAL,
  map_lng REAL,
  description TEXT,
  currency TEXT,
  price REAL,
  payment_terms TEXT,
  is_published INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS property_details (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  property_id INTEGER NOT NULL,
  total_area REAL,
  bedrooms TEXT,
  bathrooms TEXT,
  parking_spots INTEGER,
  amenities TEXT,
  pets TEXT,
  FOREIGN KEY(property_id) REFERENCES properties(id)
);

CREATE TABLE IF NOT EXISTS property_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  property_id INTEGER NOT NULL,
  file_type TEXT, -- image or video
  file_url TEXT NOT NULL,
  is_primary INTEGER DEFAULT 0,
  uploaded_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(property_id) REFERENCES properties(id)
);

-- ===================================
-- 🌟 PROMOTIONS & SUBSCRIPTIONS
-- ===================================
CREATE TABLE IF NOT EXISTS promotions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  property_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  promoted_at TEXT DEFAULT CURRENT_TIMESTAMP,
  expires_at TEXT,
  FOREIGN KEY(property_id) REFERENCES properties(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  plan TEXT NOT NULL,
  is_auto_renew INTEGER DEFAULT 0,
  started_at TEXT DEFAULT CURRENT_TIMESTAMP,
  expires_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- ===================================
-- ❤️ WISHLISTS & REVIEWS
-- ===================================
CREATE TABLE IF NOT EXISTS wishlists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  property_id INTEGER NOT NULL,
  added_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(property_id) REFERENCES properties(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  property_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  rating INTEGER NOT NULL,
  message TEXT NOT NULL,
  submitted_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(property_id) REFERENCES properties(id)
);
"""

# Save this schema.sql file in the /worker folder for the user
schema_path = "/mnt/data/schema.sql"
with open(schema_path, "w") as f:
    f.write(schema_sql)

schema_path
