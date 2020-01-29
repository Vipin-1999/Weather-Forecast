const fraction = require('../public/js/fraction')

const express = require('express')
const path = require('path')
const hbs = require('hbs')

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
        title : 'Fractions app',
        fraction,
        name : 'Stark'
    })
})

app.get('/addFractions', (req,res)  => {
    res.render('addFractions', {
        title : 'Add Fractions',
        fraction,
        name : 'Stark'
    })
})

app.get('/fractions', (req,res) =>  {
    res.render('fractions')
})

app.listen(port, () => {
    console.log('Server started on port ' + port + '!')
})