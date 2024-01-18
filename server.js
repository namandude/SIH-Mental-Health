const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    
    const urlPath = req.url;

   
    const pathMap = {
        './': 'index.html',
        './about.html': 'about.html',
        './habit.html': 'habit.html',
        
    };

    
    const fileName = pathMap[urlPath];

    if (fileName) {
        
        const filePath = path.join('public', fileName);  
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${fileName}:`, err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error: ' + err.message);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 4000;

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});