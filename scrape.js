var extract = require('./pdf-text-extract.js'),
fs = require('fs');

var files = fs.readdirSync('raw');

files.forEach(function( filename ) {
  scrape(filename);
});

function scrape( filename ) {
  extract('raw/' + filename, {
    'splitPages': false
  }, function ( err, text ) {
    writeToFile( filename, text );
  })
}

function writeToFile( filename, text ) {
  var outputFilename = filename.split('.')[0] + '.txt';

  var output = fs.createWriteStream( 'txt/' + outputFilename )
  output.write( text );
};