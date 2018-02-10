CREATE DATABASE if not exists chat;

USE chat;

CREATE TABLE if not exists usernames (
  user_id int not null AUTO_INCREMENT primary key,
  username varchar(15) not null
);

CREATE TABLE if not exists roomnames (
  room_id int not null AUTO_INCREMENT primary key,
  roomname varchar(15)
);

CREATE TABLE if not exists messages (
  message_id int not null AUTO_INCREMENT primary key,
  user_id int not null,
  message varchar(100) not null,
  room_id int not null,
  FOREIGN KEY (`room_id`) REFERENCES `roomnames`(`room_id`),
  FOREIGN KEY (`user_id`) REFERENCES `usernames`(`user_id`) 
);
  -- FOREIGN KEY (`roomname`) REFERENCES (`roomnames`(`room_id`));

--insert into messages (message_id, user_id, message, room_id) values (1, 2, 'sup', 3);
 

/* Create other tables and define schemas for them here! */
-- drop TABLE students; 
-- create table students (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(2),
--   favorite_snack varchar(2),
--   primary key (id)
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

