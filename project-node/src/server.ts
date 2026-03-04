import http from 'http';

const server = http.createServer((req, res) => {
const url = req.url;
const method = req.method;

if (url === '/' && method === 'GET') {
res.writeHead(200, { 'content-type': 'application/json' });
res.end(JSON.stringify({ message: "🏠 Halaman Utama", description: "Selamat datang di halaman home" }));
} else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: "📖 Halaman about" }));
} else if (url === '/users' && method === 'GET') {
    const id = url.split('/')[2];
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: `user ID: ${id}` }));
} else {
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: "Halaman tidak ditemukan" }));
}
});

server.listen(3000, () => {
console.log('Server berjalan di http://localhost:3000');
});