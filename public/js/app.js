const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message')
const messageLocation = document.querySelector('#location')
const messageForecast = document.querySelector('#forecast')
const messageLatitude = document.querySelector('#latitude')
const messageLongitude = document.querySelector('#longitude')
const messageCoordinates = document.querySelector('#coordinates')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var location = search.value

    message.textContent = 'Showing forecast..'
    messageLocation.textContent = ''
    messageForecast.textContent = ''
    messageLatitude.textContent = ''
    messageLongitude.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) =>  {
            if(data.error)  
                messageOne.textContent = data.error
            else    {
                messageLocation.textContent = 'Location : ' + data.Location
                messageForecast.textContent = 'Forecast : ' + data.Forecast
                messageCoordinates.textContent = 'Coordinates are :'
                messageLatitude.textContent = 'Latitude : ' + data.Coordinates.Latitude
                messageLongitude.textContent = 'Longitude : ' + data.Coordinates.Longitude
            }
        })
    })
})