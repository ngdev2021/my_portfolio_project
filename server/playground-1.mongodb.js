/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'portfolio';
const collection = 'sales';
const document = 'sale-1';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Insert a new document.
db[collection].insertOne({ _id: document, item: 'canvas', qty: 100, price: 12 });

// Find the document.
db[collection].find({ _id: document });

// Update the document.
db[collection].updateOne({ _id: document }, { $set: { price: 20 } });

// create many documents
db[collection].insertMany([
  { _id: 'sale-2', item: 'canvas', qty: 200, price: 15 },
  { _id: 'sale-3', item: 'journal', qty: 50, price: 20 },
  { _id: 'sale-4', item: 'mat', qty: 10, price: 8 },
  { _id: 'sale-5', item: 'mousepad', qty: 25, price: 10 },
]);


// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
