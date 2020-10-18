 //importar dependencia 
 const express = require('express')

 //configura la ruta del archivo
 const path = require('path')

 const pages = require('./pages.js')

 //iniciando o express
 const server = express()

 server

 //utilizar dody do req
 .use(express.urlencoded({extended:true}))

 //configuración de archivos estaticos
 .use(express.static('public'))

 //Configuras template engine
 .set('views', path.join(__dirname, "views"))
 //leer el archivo sin colocar hbs
 .set('view engine', 'hbs')

 //criar una ruta
 .get('/', pages.index)
 .get('/orphanages', pages.orphanages)
 .get('/orphanage', pages.orphanage)
 .get('/create-orphanage', pages.createOrphanage)
 .post('/save-orphanage', pages.saveOrphanage)

 //ligar o servidor
 .listen(5500, ()=>{
     console.log('Server is running')
 })