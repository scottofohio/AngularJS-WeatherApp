# Simple Angular JS Weather App. 

*A weather app that uses Angular JS. Angular JS is in LTS and will be ending all support December 31, 2021. * 

This app works regardless. 

All you need to do is register a free api key at [Open Weather Map](openweathermap.org) and then put it in `/controllers/get-weather.js` in the `getWeather` controller.

##### API key goes here. 
```javascript
  // ...
  var location,
    apiKey = 'API_KEY',
    unitFormat = 'imperial',
    day = 'weather';
  // ...
```
That's it, nothing special. 