const { City } = require('../models/index');
const  { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }) { 
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error }
        }
    }
    
    async deleteCity( cityId ) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error }
        }
    }

    async updateCity(cityId, data) {
        try {
            // there are multiple ways of updating a data in sequlize,and below we have use the two most common methods or ways to update data in database
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // })
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log('Somethig went wrong in the repository layer');
            throw { error }; 
        }
    }

    async getCity(cityId) {
        try {
            const city =  await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error }
        }
    }
    async getAllCity(name) {
        try {
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error }
        }
    }

    async getCityByName(filter) {
        try {
            if(filter.name) {
                const city = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return city;
            }
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error };
        }
    }
}; 

module.exports = CityRepository;