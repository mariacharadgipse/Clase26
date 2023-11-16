const express = require('express')
const path = require('path')
const app = express()

const mainRoutes= require('./routes/mainRoutes')

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use("/", mainRoutes);


const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port} 😎🙌`)
})
