const fs = require('fs')

function openErr(err, f) {
/*Error handling for opening a file
if (err) {
return console.error(err);
}
console.log(f);
console.log("File Opened!!");
}
*/


//FS.Open attempt at opening/creating a file. PRIMARY METHOD

/* Uncomment to test
NOTE TO SELF: The callback function saves the data to 'f'... sorta. It might not actually save it to F, but it'll output F to the console
(?? confirm)

fs.open( 'saves/charactertemplate.json', function (err, f) {
   if (err) {
      return console.error(err);
   }
   console.log(f);
   console.log("File opened!!");     
});

*/