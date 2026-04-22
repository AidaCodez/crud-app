-- CREATE DATABASE perntodo; //render psql not permision to create database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);