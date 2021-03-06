DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    "Name" VARCHAR(50) NOT NULL,
    "Age" INT,
    "Number of Oscars" INT
);

INSERT INTO actors ("Name", "Age", "Number of Oscars") VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors ("Name", "Age", "Number of Oscars") VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors ("Name", "Age", "Number of Oscars") VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors ("Name", "Age", "Number of Oscars") VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors ("Name", "Age", "Number of Oscars") VALUES ('John Cho', 43, 0);

-- Which actors have more than one oscar?
-- SELECT "Name" FORM actors WHERE "Number of Oscars" >1;

-- Which actors are older than 30 years old?
-- SELECT "Name" FORM actors WHERE "Age" > 30;
