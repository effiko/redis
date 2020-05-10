// convert the csv file received fo MOT to a json file

const parserParameters = {'delimiter': '|', };
const csv=require('csvtojson')
const csvFilePath = './bikes.txt';
const fs = require('fs');

// Create the header for the json file
fs.appendFile('bikesfull.json', '{"bikes": [\n', function (err) {
    if (err) throw err;
  });
  lineCounter=0;
csv(parserParameters)
.fromFile(csvFilePath)
.subscribe((json,lineNumber)=>{
    // console.log(json);
    fs.appendFile('bikesfull.json', JSON.stringify(json)+',\n', function (err) {
        if (err) throw err;
       //  console.log('Saved!');
      });

      if ((lineNumber % 1000) === 0) {
        console.log('Saved ' + lineNumber);
      }
      lineCounter = lineNumber ;
    });
    console.log('Total Saved ' + lineCounter);
    // Terminate the file so the json is valid
    fs.appendFile('bikesfull.json', ']}\n', function (err) {
        if (err) throw err;
    });
    