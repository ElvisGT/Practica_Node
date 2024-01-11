const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.write(`
        <h1>Inicio del sitio</h1>
        <a href="/about">Acerca</a>
    `)
        return res.end()
    }

    if (req.url === "/about") {
        res.write(`
            <h1>Acerca</h1>
            <a href="/">Volver</a>
        `)
        return res.end()
    }

    res.write(`
        <h1>No se encontro la ruta</h1>
        <a href="/">Home</a>

    `)
    res.end()


});

server.listen(8080)

console.log(`Servidor corriendo en el puerto ${port}`)