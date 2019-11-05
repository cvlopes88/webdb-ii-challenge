

const express = require('express');

const server = express();


server.post('/api/cars', (req, res) => {
    
})

server.listen(1000, () => {
    console.log('\n*********** Server Running On Port 1000 *********** \n')
});