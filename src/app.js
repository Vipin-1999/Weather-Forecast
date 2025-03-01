const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

require('dotenv').config();

const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res)  =>  {
    res.render('index', {
        title : 'Weather app',
        name : 'Stark'
    })
}) 

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About page',
        name : 'Stark'
    })
})

app.get('/help', (req, res) =>  {
    res.render('help', {
        helpText : 'We are here to help',
        title : 'Help page',
        name : 'Stark'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)  {
        return res.send({
            error : 'You must provide an address'
        })
    }
    else {
        geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
            if(error)
                return res.send({
                    error : error
                })
            else    {
                forecast(latitude, longitude, (error, forecastdata) => {
                    if(error)
                        return res.send({
                            error : error
                        })
                    else
                        res.send({
                            Forecast : forecastdata,
                            Location : location,
                            Address : req.query.ad,
                            Coordinates : {
                                Latitude : latitude,
                                Longitude : longitude
                            }
                        })
                })
            }
        })
    }
})

app.get('/products', (req, res) => {
    if(!req.query.search)   {
        return res.send({
            error : 'You must provide a search term'
        })
    }
    res.send({
        products : []
    })
})

app.get('/help/data', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Stark',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Stark',
        errorMessage: 'Page not found.'
    })})

app.listen(port, () => {
    console.log('Server started on port ' + port + '!')
})