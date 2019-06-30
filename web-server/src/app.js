const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const name = 'Ricardo'

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine e views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name,
		helpText: 'This is some helpful text.'
	})
})

app.get('/weather', (req, res) => {
	res.send({
		location: 'Vitoria',
		forecast: '32 degrees'
	})
})

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name,
		errorMessage: 'Help article not found.'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name,
		errorMessage: 'Page not found.'
	})
})

app.listen(3000, () => {
	console.log('Server is up on port 3000.')
})