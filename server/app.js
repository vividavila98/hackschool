/*let x = [1, 6, 3];
let y = [1, 4, 3];

function isEqual(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual(x,y));
*/

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Access example.com/
app.get('/', (req, res) => {
    res.send("I love HackSchool! :)");
});

// Access example.com/memes
app.get('/memes', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

