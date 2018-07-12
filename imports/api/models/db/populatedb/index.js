//#!/usr/bin / env node

const async = require('async')
const mongoose = require('mongoose')
const faker = require('faker')
const gis = require('g-i-s')

const Ground = require('../groundsModel')
const Comment = require('../commentsModal')

const MAX_GROUNDS = 150;
let googleImageResult = []
let _grounds = []
let _comments = []
let _users = []

console.log('This script populates some data to your' +
  ' database. Specified database as argument - e.g.: populatedb mongodb://your_user' +
  'name:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process
  .argv
  .slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
  console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
  return
}



var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose
  .connection
  .on('error', console.error.bind(console, 'MongoDB connection error:'));


dropDatabasePromise = new Promise((resolve, reject)=>{
  db.dropDatabase((err) => {
    if(err) reject(err);
    console.log('Database was dropped')
    console.log('Importing new data...')
    resolve();
  });
})
fetchImagePromise = new Promise((resolve, reject) => {
  console.log('Fetching data from google image...');
  gis('stadium', (error, results) => {
    if (error) {
      reject(error);
    } else {
      googleImageResult = results;
      console.log(Object.keys(googleImageResult).length, " results were fetched");
      resolve(results);
    }
  });
})



function groundCreater(obj, cb) {
  let ground = new Ground(obj);

  ground.save(function (err) {
    if (err) {
      console.log(err);
      return;
      cb(err, null);
      return;
    }
    console.log('New ground: ' + ground);
    _grounds.push(ground)
    cb(null, ground);
  });
}




// function commentCreater(obj, cb) {
//   let comment = new Comment(obj);

//   comment.save(function (err) {
//     if (err) {
//       cb(err, null);
//       return;
//     }
//     console.log('New comment: ' + comment);
//     _comments.push(comment)
//     cb(null, comment);
//   });
// }

function createGrounds(cb) {
  execArray = [];
  execArray.push(function (callback) {
    const ground = {
      name: 'Old Trafford Stadium',
      address: 'Sir Matt Busby Way, Stretford Manchester M16 0RA, UK',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Old_Trafford_inside_20060726_1.jpg',
      rating: 4.5,
      description: 'Old Trafford is a football stadium in Old Trafford, Greater Manchester, England, and the home of Manchester United. With a capacity of 74,994,[1] it is the largest club football stadium (and second largest overall after Wembley Stadium) in the United Kingdom, and the eleventh-largest in Europe.[2] It is about 0.5 miles (800 m) from Old Trafford Cricket Ground and the adjacent tram stop.',
      price: 35
    }

    groundCreater(ground, callback);
  })
  execArray.push(function (callback) {
    const ground = {
      name: 'Mỹ Đình National Stadium',
      address: 'Le Duc Tho street, My Dinh, Nam Tu Liem, HaNoi, Vietnam',
      imgURL: 'https://i.ytimg.com/vi/Rmrjtd_edS4/maxresdefault.jpg',
      rating: 4,
      description: 'The Mỹ Đình National Stadium (Vietnamese: Sân vận động Quốc gia Mỹ Đình) is a multi-use stadium in Nam Từ Liêm, Hanoi (Vietnam). It has a capacity of 40,192 seats and is the centerpiece of Vietnam\'s National Sports Complex. It was officially opened in September 2003 and was the main venue for the Southeast Asian Games later that year, hosting the opening and closing ceremony as well as the men\'s football and athletics events.',
      price: 25
    }
    groundCreater(ground, callback);
  })

  for (let i = 0; i < MAX_GROUNDS; i++) {
    execArray.push(function randomGroundGenerator(callback) {
      const ground = {
        name: `${faker.address.city()} Stadium`,
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.country()}` + 'Sir Matt Busby Way, Stretford Manchester M16 0RA, UK',
        imgURL: googleImageResult[i].url,
        rating: faker.finance.amount(0, 5, 1),
        description: faker.lorem.sentences(),
        price: faker.finance.amount(10, 100, 0)
      }
      console.log('log');
      console.log(ground);
      groundCreater(ground, callback);
    });
  }


  async.series(execArray, cb);
}


Promise.all([dropDatabasePromise, fetchImagePromise])
  .then(results=>{
    async
    .series([
        createGrounds
      ],
      // Optional callback
      function (err, results) {
        if (err) {
          console.log('FINAL ERR: ' + err);
        } else {
          console.log('No errors');
    
        }
        // All done, disconnect from database
        mongoose
          .connection
          .close();
      });
  })
  .catch(err => console.log(err))
