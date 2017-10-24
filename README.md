# Nariga JS
A node module that reports about air quality in a region .  
[![Known Vulnerabilities](https://snyk.io/test/github/yanmagale/narigajs/badge.svg)](https://snyk.io/test/github/yanmagale/narigajs)
[![Dependencies](https://david-dm.org/yanmagale/narigajs.svg)](https://david-dm.org/yanmagale/narigajs.svg)
<a href="https://www.npmjs.org/package/awesome-badges"><img src="https://img.shields.io/npm/l/awesome-badges.svg" alt="npm license" class="badge"></a>

# Motivation


# Why this name?
It's a brazilian joke about big nose. 
Just look at my photo. LOL


# How it works
I'm consulting https://openweathermap.org/current API data.


# API
Currently there is the provider for [Open Weather Map](https://openweathermap.org/) with the following methods:


### getByCityName(cityName)
Requires a string representing city name.
Returns [json data](https://openweathermap.org/current#name) .
  
### getByCityId(cityId)
Requires a numeric representing city id.
Returns [json data](https://openweathermap.org/current#cityid) .
  
### getByLatLong(lat, lon)
Requires a two numeric representing latitude and longitude.
Returns [json data](https://openweathermap.org/current#geo) .  

### getByZipCodeAndCountryCode(zipCode, countryCode)
Requires a two strings representing zipCode and countryCode.
Returns [json data](https://openweathermap.org/current#zip) .  

### getByCitiesAndUnit(citiesIds, unit)
Requires a number list and string representing citiesIds and unit.
Returns [json data](https://openweathermap.org/current#severalid) .


## Contributing

[Look CONTRIBUTTING](https://github.com/yanmagale/narigajs/blob/master/.github/CONTRIBUTTING.md)