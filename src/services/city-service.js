const { CityRepository} = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log('Something went wrong at the Service layer');
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log('Something went wrong at the Service layer');
            throw { error }
        }
    }

    async updateCity(data,cityId) {
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log('Something went wrong at the Service layer');
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong at the Service layer');
            throw { error }
        }
    }

    async getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCity();
            return cities;
        } catch (error) {
            console.log('Something went wrong at the Service layer');
            throw { error };
        }
    }

    async getCityByName(filter) {
        try {
            const city = await this.cityRepository.getCityByName({ name: filter.name });
            return city;
        } catch (error) {
            console.log('Something went wrong at the Service layer');
            throw { error };
        }
    }

};

module.exports = CityService;