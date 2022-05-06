-- CREATE DATABASE "saloon-keeper"


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "product_list" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (50),
  "unit_type" VARCHAR (30),
  "type" VARCHAR (30),
  "amount" VARCHAR (30),
  "par" INT (1000),
  "image" VARCHAR,
  "expected_amount" INT (1000),
  "product_ordered" BOOLEAN DEFAULT FALSE
);


CREATE TABLE "product_count" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL,
  "product_id" INT NOT NULL,
  "create_date" VARCHAR(30),
  "current_count" INT NOT NULL
);

--------[ DATA! ]---------

-- starter products
INSERT INTO "product_list"("id","name","amount","unit_type","type","par","expected_amount","image","product_ordered")
VALUES
('Jameson Irish Whiskey', '750 ml', 'bottle', 'whiskey', 99, 100, 'https://dydza6t6xitx6.cloudfront.net/ci-jameson-irish-whiskey-83c0830f276cf30a.jpeg', TRUE),
('Grey Goose Vodka', '750 ml', 'bottle', 'vodka', 125, 125, 'https://products0.imgix.drizly.com/ci-grey-goose-vodka-5beb834a0488bbbb.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Casamigo Tequilla', '750 ml', 'bottle', 'tequilla', 170, 170, 'https://products1.imgix.drizly.com/ci-casamigos-reposado-c8e64577064c12b1.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Tanqueray', '1.75 l', 'bottle', 'gin', 175, 175, 'https://products1.imgix.drizly.com/ci-tanqueray-london-dry-gin-148bea7a3b10c3e4.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', RUE),
('Bombay Saphire', '1.5 l', 'bottle', 'gin', 200, 200, 'https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Bulleit Bourban', '750 ml', 'bottle', 'bourban', 200, 200, 'https://products3.imgix.drizly.com/ci-bulleit-bourbon-ece6dc419fd8a84b.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Johnny Walker Red' ,'750 ml', 'bottle', 'scotch', 190, 190,'https://products0.imgix.drizly.com/ci-johnnie-walker-red-label-f85033b74cb4b835.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Captain Morgan', '1.75 l', 'bottle', 'rum', 180, 180,'https://products3.imgix.drizly.com/ci-captain-morgan-original-spiced-rum-50b42d45bcd74a31.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Bacardi', '1.0 l', 'bottle', 'rum', 180, 180, 'https://products2.imgix.drizly.com/ci-bacardi-superior-rum-dfd1809889854320.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Hennessy', '750.0 ml', 'bottle', 'cognac', 100, 100, 'https://products3.imgix.drizly.com/ci-hennessy-vs-cognac-4386a392a6b94b18.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Christian Brothers', '1.75 l', 'bottle', 'brandy', 150, 150,'https://products0.imgix.drizly.com/ci-christian-brothers-brandy-79419553c0ec5474.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Bud Light', '12 oz', 'bottle', 'beer', 300, 300, 'https://products1.imgix.drizly.com/ci-bud-light-980728905e40c8af.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Coors Light', '12 oz', 'can', 'beer', 350, 350,'https://products3.imgix.drizly.com/ci-coors-light-315ea47b7c9c0280.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE),
('Budweiser', '12 oz', 'can', 'beer', 275, 275, 'https://products3.imgix.drizly.com/ci-budweiser-24269668d4e23c97.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', FALSE),
('Jack Daniels', '750ml', 'bottle', 'whiskey', 250, 300, 'https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', TRUE);

-- starter genres
INSERT INTO "product_count"("id", "user_id", "product_id", "create_date", "current_count")
VALUES
(1, 1, 1, '2024-04-20', 175),
(2, 1, 2, '2022-04-27', 125),
(3, 1, 3, '2022-04-29', 175),
(4, 2, 4, '2022-04-28', 175),
(5, 2, 5, '2022-04-21', 205),
(6, 1, 6, '2022-04-21', 200),
(7, 1, 7, '2022-04-22', 190),
(8, 1, 8, '2022-04-22', 180),
(9, 1, 9, '2022-04-08', 180),
(10, 1, 10, '2022-04-15', 100),
(11, 1, 11,'2022-04-09', 150),
(12, 1, 12,'2022-05-20', 300),
(13, 1, 14, '2022-04-29', 300);

