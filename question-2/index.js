const fs = require('fs').promises;

//normal callback function

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');


    fs.readFile('mynewfile3.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log('File content:', data);
    });
});


//function with promises

fs.writeFile('mynewfile4.txt', 'Hello buddy!')
  .then(() => {
    console.log('Saved!');
    return fs.readFile('mynewfile4.txt', 'utf8');
  })
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((err) => {
    console.error('Error:', err);
  });


  //function with async await

  async function writeAndReadFile() {
  try {
    await fs.writeFile('mynewfile5.txt', 'Hello mate, how are you!');
    console.log('Saved!');

    const data = await fs.readFile('mynewfile5.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

writeAndReadFile();