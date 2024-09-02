const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    if (req.url === '/') {
        res.end('Hello, World!');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.end('Contact Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});


server.listen(port,() => {
    console.log(`Server running at http://localhost:${port}/`);
});
