const path = require('path');
const provider = require(path.resolve('src/providers/openWeatherMapProvider'));
const assert = require('chai').assert;

describe('OpenWeatherMap', () => {

    it('getByCityName', done => {
        const _cityName = 'London';

        provider.getByCityName(_cityName).then(response => {
            response.json().then(json => {
                assert.isObject(json);
                assert.property(json, 'coord');
                assert.property(json, 'id');
                assert.property(json, 'weather');
                assert.property(json, 'wind');
                done();
            }).catch(error => {
                throw error;
            });
        });
    });

    it('getByCityId', done => {
        const _cityId = 2172797;

        provider.getByCityId(_cityId).then(response => {
            response.json().then(json => {
                assert.isObject(json);
                assert.property(json, 'coord');
                assert.property(json, 'id');
                assert.isTrue(json.id == _cityId);
                assert.property(json, 'weather');
                assert.property(json, 'wind');
                done();
            }).catch(error => {
                throw error;
            });
        });
    });

    it('getByLatLong', done => {
        const _longitude = -0.13;
        const _latitude = 51.51;

        provider.getByLatLong(_latitude, _longitude).then(response => {
            response.json().then(json => {
                assert.isObject(json);
                assert.property(json, 'coord');
                assert.isObject(json.coord);
                assert.isObject(json.coord);
                assert.property(json, 'id');
                assert.property(json, 'weather');
                assert.property(json, 'wind');
                done();
            }).catch(error => {
                throw error;
            });
        });
    });

    it('getByZipCodeAndCountryCode', done => {
        const _zip = '94040';
        const _countryCode = 'US';

        provider.getByZipCodeAndCountryCode(_zip, _countryCode).then(response => {
            response.json().then(json => {
                assert.isObject(json);
                assert.property(json, 'coord');
                assert.isObject(json.coord);
                assert.isObject(json.coord);
                assert.property(json, 'id');
                assert.property(json, 'weather');
                assert.property(json, 'wind');
                assert.isObject(json.sys);
                assert.isTrue(json.sys.country == _countryCode);
                done();
            }).catch(error => {
                throw error;
            });
        });
    });

});