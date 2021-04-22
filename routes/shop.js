const express = require('express')

const router = express.Router()

const path = require('path')

const adminData = require('./admin')

const rootDir = require('../util/path')

router.get('/', (request, response, next) => {
    const products = adminData.products
    response.render('shop', {prods : products, documentTitle : 'Shop'})
})


module.exports = router