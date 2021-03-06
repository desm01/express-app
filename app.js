const express = require('express')

const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const path = require('path')

const app = express()


app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)

app.use(shopRoutes)

app.use((request, response, next) => {
    response.status(404).render('error', {pageTitle : 'Error, page not found'})
})


app.listen(3000)