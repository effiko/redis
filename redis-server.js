const
  redis = require('redis'),
  rejson = require('redis-rejson');
  const fs = require('fs');

  const parserParameters = {'delimiter': '|', };
const csv=require('csvtojson')
const csvFilePath = './bikes.txt';


let rawdata = fs.readFileSync('bikesfull.json');
// let rawdata = fs.readFileSync('bikes.json');

  let bikes = JSON.parse(rawdata);
 
rejson(redis); /* important - this must come BEFORE creating the client */

let client = redis.createClient(4567);
/*
rawdata = '';
csv(parserParameters)
.fromFile(csvFilePath)
.subscribe((json,lineNumber)=>{
    // console.log(json);
    fs.appendFile('bikesfull.json', JSON.stringify(json)+'\n', function (err) {
        if (err) throw err;
       //  console.log('Saved!');
      });
      if ((lineNumber % 1000) === 0) {
        console.log('Saved ' + lineNumber);
      }
*/
      var lineNumber = 0 ;
      bikes.bikes.forEach((json)=>{
      //  console.log(json);
        
        if ((lineNumber++ % 1000) === 0) {
          console.log('Saved ' + lineNumber);
        }
      client.json_set(json.mispar_rechev, '.', JSON.stringify(json), function (err) {
        if (err) throw console.error(err);
          
        })}
      )
      
// })

/*
    bikes.bikes.forEach(element => {
        console.log(element.mispar_rechev);
        jj = JSON.stringify(element);
        console.log(typeof jj);
        client.json_set(element.mispar_rechev, '.', jj, function (err) {
            if (err)  throw err; 
            console.log('Set JSON at key ' + element.mispar_rechev + '.'); 
            }
            
    )});
*/
    client.json_get('03455432', '.', function (err, value) {
    if (err) { throw err; }
    console.log('value of 03455432:', value); 
    client.quit();
  });
