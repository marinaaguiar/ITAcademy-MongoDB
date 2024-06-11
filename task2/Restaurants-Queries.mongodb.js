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
db.restaurant.find({}, {
    restaurant_id: 1, name: 1, borough: 1, cuisine: 1
});

// 3. Write a query to display the restaurant_id, name, borough, and cuisine, but exclude the _id field for all documents in the Restaurants collection.
db.restaurant.find({}, {
    _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1
});

// 4. Write a query to display restaurant_id, name, borough, and zip code, but exclude the _id field for all documents in the Restaurants collection.
db.restaurant.find({}, {
    _id: 0, restaurant_id: 1, name: 1, borough: 1, 
    "address.zipcode": 1
});

// 5. Write a query to show all the restaurants that are in the Bronx.
db.restaurant.find({borough: "Bronx"});

// 6. Write a query to show the first 5 restaurants that are in the Bronx.
db.restaurant.find({borough: "Bronx"}).limit(5);

// 7. Enter a query to display the next 5 restaurants after skipping the first 5 in the Bronx.
db.restaurant.find({borough: "Bronx"}).skip(5).limit(5);

// 8. Write a query to find the restaurants that have a score of more than 90.
// db.restaurant.find({"grades.score": {$gt: 90}});

db.restaurant.find({"grades.score": {"$gt": 90}});

// 9. Write a query to find restaurants that have a score of more than 80 but less than 100.
db.restaurant.find({"grades": { $elemMatch: {score: { $gt: 80, $lt: 100}}}});

// 10. Write a query to find restaurants that are located at a latitude value less than -95.754168.
db.restaurant.find({"address.coord.0": { $lt: -95.754168}});

// 11. Write a MongoDB query to find restaurants that do not serve any 'American' cuisine 
// and have a rating greater than 70 and longitude less than -65.754168.
db.restaurant.find({
    "cuisine": { "$not": /American/i },
    "grades.score": { "$gt": 70 },
    "address.coord.0": { "$lt": -65.754168 }
});

// 12. Write a query to find the restaurants that do not prepare any 'American' cuisine 
// and got a marker more than 70 and located in the longitude less than -65.754168. 
// Note : Do this query without using the $and operator.
db.restaurant.find({
    "cuisine": { "$not": /American/i},
    "grades.score": { "$gt": 70 },
    "address.coord.0": { "$lt": -65.754168 }
});

// 13. Enter a query to find restaurants that do not serve any 'American' cuisine 
// and received an 'A' grade point not belonging to Brooklyn. The document should 
// be displayed according to cuisine in descending order.
db.restaurant.find({ 
    "cuisine": { $nin: ["American", "American "]}, 
    "grades.grade": "A",
    "borough": {$nin: ["Brooklyn"] }});

// 14. Write a query to find the restaurant_id, name, borough, and cuisine for those 
// restaurants that contain 'Wil' as the first three letters in their name.

db.restaurant.find({
    "name": /\AWil/
}, {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});

// 15. Write a query to find the restaurant_id, name, borough, and cuisine for 
// those restaurants that contain 'ces' as the last three letters in their name.
db.restaurant.find({
    "name": /ces$/
}, {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});

// 16. Write a query to find the restaurant_id, name, borough and cuisine for those 
// restaurants that contain 'Reg' as three letters somewhere in their name.
db.restaurant.find({
    "name": /Reg/
}, {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});

// 17. Write a query to find restaurants that belong to the Bronx and prepare any 
// American or Chinese dish.
db.restaurant.find({
    "borough": "Bronx",
    "cuisine": { "$in": ["American", "American ", "Chinese"] }
});

// 18. Write a query to find the restaurant_id, name, borough, and cuisine for those 
// restaurants that belong to Staten Island or Queens or Bronx or Brooklyn.
db.restaurant.find({
    "borough": { "$in": ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
}, {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});

// 19. Write a query to find the restaurant_id, name, borough, and cuisine for those 
// restaurants that are not in Staten Island or Queens or Bronx or Brooklyn.
db.restaurant.find({
    "borough": { "$nin": ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
}, {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});

// 20. Write a query to find the restaurant_id, name, borough, and cuisine for those 
// restaurants that get a score that is no more than 10.
db.restaurant.find({
    "grades.score": { "$lte": 10 }
}, {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
});

// 21. Write a query to find the restaurant_id, name, borough and cuisine for those 
// restaurants that prepare fish except 'American' and 'Chinese' or the restaurant name 
// starts with the letters 'Wil'.
db.restaurant.find( {$or:[ 
    {
        cuisine:{ 
            $nin:["American", "American ", "Chinese"] },
            name:/^Wil/i
    }, { cuisine: "Seafood" }
    ] 
    }, { 
        "restaurant_id": 1,
        "name": 1,
        "grades": 1,
        "_id": 0
        });

// 22. Write a query to find the restaurant_id, name, and grades for those restaurants 
// that achieve an "A" grade and a score of 11 on study data 
// ISODate "2014-08-11T00:00:00Z".
db.restaurant.find({
    "grades": {
        "$elemMatch": {
            "grade": "A",
            "score": 11,
            "date": ISODate("2014-08-11T00:00:00Z")
        }
    }
}, {
    "restaurant_id": 1,
    "name": 1,
    "grades": 1,
    "_id": 0
});

// 23. Write a query to find the restaurant_id, name, and grades for those restaurants 
// where the 2nd grade array element contains a grade of "A" and marker 9 on an 
// ISODate "2014-08-11T00:00:00Z".
db.restaurant.find({
    "grades.1.score" : 9, 
    "grades.1.grade" : "A", 
    "grades.1.date": ISODate('2014-08-11T00:00:00Z')
}, {
    "restaurant_id": 1,
    "name": 1,
    "grades": 1,
    "_id": 0
});

// 24. Write a query to find the restaurant_id, name, address, and geographic location 
// for those restaurants where the second element of the coord array contains a value 
// greater than 42 and up to 52.
db.restaurant.find({
    "address.coord.1" : {$gt: 42, $lte: 52}
}, {
    "restaurant_id": 1,
    "name": 1,
    "address": 1,
    "_id": 0
});

// 25. Write a query to arrange the restaurant name in ascending order along with all 
// the columns.
db.restaurant.find().sort({ "name": 1 });

// 26. Write a query to arrange the restaurant name in descending order along with all 
// the columns.
db.restaurant.find().sort({ "name": -1 });

// 27. Write a query to organize the cuisine name in ascending order and by the same 
// cuisine district. descending order
db.restaurant.find().sort({ 
    "cuisine": 1, 
    "borough": -1 
});

// 28. Write a query to find out all the addresses that do not contain the street.
db.restaurant.find( {"address.street": null} );

// 29. Write a query that will select all documents in the restaurants collection 
// where the value of the coord field is Double.
db.restaurant.find( {"address.coord": {$type: "double"}} );

// 30. Write a query that will select the restaurant_id, name, and grade for those 
// restaurants that return 0 as the remainder after dividing the score by 7.
db.restaurant.find({
    "grades.score": { "$mod": [7, 0] }
}, {
    "restaurant_id": 1,
    "name": 1,
    "grades": 1,
    "_id": 0
});

// 31. Write a query to find the restaurant name, borough, longitude and altitude and 
// cook for those restaurants that contain 'mon' as three letters somewhere in their name.
db.restaurant.find(
    { "name": /mon/ }, 
    { 
        "name": 1, 
        "borough": 1, 
        "address.coord": 1, 
        "cuisine": 1, "_id": 0 
});

// 32. Write a query to find the restaurant name, borough, longitude and latitude and cook 
// for those restaurants that contain 'Mad' as the first three letters of their name.
db.restaurant.find(
    { "name": /Mad/ }, 
    { 
        "name": 1, 
        "borough": 1, 
        "address.coord": 1, 
        "cuisine": 1, "_id": 0 
});
  

