
INSERT INTO accounts (username, password)
VALUES
('John', 'abc123'),
('Jane', 'abc123'),
('Mark', 'abc123'),
('Emily', 'abc123'),
('Michael', 'abc123')

INSERT INTO recipes (accountId, title, ingredients, directives)
VALUES
(1, 'Pancake', 'haha', 'yes'),
(2, 'Pizza', 'flour, cheese, tomato sauce', 'mix, top, bake'),
(3, 'Chocolate Cake', 'flour, sugar, cocoa powder', 'mix, bake, decorate'),
(4, 'BBQ Ribs', 'ribs, BBQ sauce', 'marinate, grill'),
(5, 'Vegetable Stir Fry', 'vegetables, soy sauce', 'chop, stir fry');

INSERT INTO comments (accountId, recipeId, comment)
VALUES
(1, 1, 'These pancakes were amazing!'),
(2, 1, 'I love pancakes too!'),
(3, 1, 'This recipe is great!'),
(4, 1, 'I added some blueberries and it was delicious!'),
(5, 1, 'Thanks for sharing this recipe!'),
(2, 2, 'This pizza was so good!'),
(3, 2, 'I made this for dinner last night and everyone loved it!'),
(4, 2, 'The crust was perfect!'),
(1, 3, 'I can never resist chocolate!'),
(2, 3, 'This recipe is dangerous for my diet!'),
(3, 4, 'I made some adjustments to the recipe and it turned out great!'),
(4, 4, 'I love grilling, and this recipe is perfect!'),
(5, 5, 'This vegetable stir fry was so tasty!'),
(1, 5, 'I added some tofu and it was amazing!'),
(3, 6, 'I made this BBQ sauce for a party and everyone loved it!'),
(4, 6, 'I used this sauce on ribs and it was delicious!'),
(5, 6, 'I cant wait to try this on chicken next!');
