let express = require('express'); //requiro express
let app = express(); //Ejecuto express
const PORT = 3001
const path = require('path')
app.use(express.static("public"))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get('/contacto', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/contact.html'))
})
app.get('/nosotros', function (req, res) {
    res.send("About us")
})
app.get('/productos', function (req, res) {
    res.send("List of products ******")
})


app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))