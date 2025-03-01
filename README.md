# Weather Forecast

A simple web application that provides weather forecasts for any given location. It leverages Node.js and Express for the backend and uses Handlebars (hbs) for rendering dynamic web pages. By integrating with external APIs like Mapbox for geocoding and Dark Sky for weather data, this project simplifies the process of fetching up-to-date weather information, helping users quickly obtain accurate forecasts based on their address input.

## Features
- **Dynamic Weather Forecasts:** Fetch current weather information by providing an address.
- **Interactive UI:** Utilizes hbs (Handlebars) to render dynamic pages for the Home, About, and Help sections.
- **External API Integrations:**
  - [Mapbox API](https://docs.mapbox.com/api/search/geocoding/) for converting addresses into geographic coordinates.
  - [Dark Sky API](https://darksky.net/dev) for retrieving weather details.
- **Error Handling:** Robust error handling for missing or incorrect query parameters.
- **Routing:** Clean routing setup with separate endpoints for weather data, products, and custom 404 error pages.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Templating Engine:** hbs (Handlebars)
- **APIs:** Mapbox for geocoding, Dark Sky for weather forecasts
- **Utilities:** request module for making API calls

## Installation & Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Vipin-1999/Weather-Forecast.git
   cd Weather-Forecast
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   For more details on installation and troubleshooting for the external packages:
   - [Express Installation & Troubleshooting](https://expressjs.com/en/starter/installing.html)
   - [hbs (Handlebars) Installation & Troubleshooting](https://www.npmjs.com/package/hbs)
   - [request Module Installation & Troubleshooting](https://www.npmjs.com/package/request)

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory of the project and add your API tokens for Mapbox and Dark Sky:
   ```env
   MAPBOX_TOKEN=your_mapbox_token_here
   DARK_SKY_TOKEN=your_darksky_token_here
   ```
   > **Disclaimer:** You must generate your own API tokens for Mapbox and Dark Sky and add them to the `.env` file. Without these tokens, the application will not be able to access the respective APIs.

4. **Start the Server:**
   ```bash
   npm start
   ```
   The server will run on port `3000` by default or on the port specified in your environment variable `PORT`.

## Usage
- **Home Page:**  
  Visit `http://localhost:3000/` to access the main page.
- **About Page:**  
  Visit `http://localhost:3000/about` for more information about the project.
- **Help Page:**  
  Visit `http://localhost:3000/help` for assistance.
- **Weather Endpoint:**  
  To get the weather forecast, navigate to:  
  ```
  http://localhost:3000/weather?address=YourAddress
  ```
  Replace `YourAddress` with the desired location.
- **Products Endpoint:**  
  Example endpoint to demonstrate query parameter usage:  
  ```
  http://localhost:3000/products?search=term
  ```

## Contributing
Contributions are welcome! Please refer to our [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
