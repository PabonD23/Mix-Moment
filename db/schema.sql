DROP DATABASE IF EXISTS mixer_DB;
CREATE DATABASE mixer_DB;

USE mixer_DB;

CREATE TABLE members(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  'password' VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  city_state VARCHAR(100) NOT NULL,
  interests,
  PRIMARY KEY (id)
);

CREATE TABLE meetups(
  id INT NOT NULL AUTO_INCREMENT,
  event_title VARCHAR(140) NOT NULL,
  city_state VARCHAR(100) NOT NULL,
  interests,
  PRIMARY KEY (id)
);