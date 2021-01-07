CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50),
    username VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    profile_pic TEXT
);

CREATE TABLE teachers(
    teacher_id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    teacher_pic TEXT,
    account_display_name VARCHAR(50),
    country VARCHAR(50),
    street_address_1 VARCHAR(50),
    street_address_2 VARCHAR(50),
    city VARCHAR(50),
    state varchar(50),
    zip INT,
    phone_number INT,
    about TEXT,
    facebook TEXT,
    twitter TEXT,
    instagram TEXT,
    linkedin TEXT,
    website TEXT
);

CREATE TABLE courses(
    course_id SERIAL PRIMARY KEY,
    teacher_id INT REFERENCES teachers(teacher_id),
    course_name VARCHAR(50),
    description TEXT,
    instructions TEXT,
    course_pic TEXT,
    category_id INT REFERENCES categories(category_id)
);

CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    user_id INT REFERENCES users(user_id),
    title VARCHAR(50),
    review_body TEXT,
    stars INT
);

CREATE TABLE videos(
    video_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    video_title VARCHAR(50),
    video_description TEXT,
    video_link TEXT
);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(course_id),
    comment_title VARCHAR(50),
    comment_body TEXT,
    user_id INT
);

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
);