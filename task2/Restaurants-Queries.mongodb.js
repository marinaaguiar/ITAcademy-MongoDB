/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Restaurants');

// 1. Write a query to display all documents in the Restaurants collection.
db.restaurant.find({}).toArray();

// 2. Write a query to display the restaurant_id, name, borough, and cuisine for all documents in the Restaurants collection.
db.restaurant.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});

// 3. Write a query to display the restaurant_id, name, borough, and cuisine, but exclude the _id field for all documents in the Restaurants collection.
db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});

// 4. Write a query to display restaurant_id, name, borough, and zip code, but exclude the _id field for all documents in the Restaurants collection.
db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1});

// 5. Write a query to show all the restaurants that are in the Bronx.
db.restaurant.find({borough: "Bronx"});

// 6. Write a query to show the first 5 restaurants that are in the Bronx.
db.restaurant.find({borough: "Bronx"}).limit(5);

// 7. Enter a query to display the next 5 restaurants after skipping the first 5 in the Bronx.
