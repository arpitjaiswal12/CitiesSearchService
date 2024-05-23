const { where, Op } = require("sequelize");
const { City } = require("../models/index.js");
const { ApiError } = require("../utils/ApiError.js");

class CityRepository {
  async createCity({ name }) {
    // accepting an object
    try {
      const city = await City.create({
        name: name, // or name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw new ApiError(
        404,
        "Error while fetching cities in repository layer!"
      );
    }
  }
  /*
  async getAllCitiesFromFilter(prefix_char) {
    try {
      const cities = await City.find({
        where: {
          name: { [Op.startsWith]: `%${prefix_char}%` },
        },
      });
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw new ApiError(
        404,
        "Error while fetching prefx cities in repository layer!"
      );
    }
  }
*/
  async updateCity(cityId, data) {
    try {
      // The below approach also works but will not return updated object
      // if we are using Pg then returning: true can be used, else not
      // const city = await City.update(data, {
      //     where: {
      //         id: cityId
      //     },
      //
      // });

      // for getting updated data in mysql we use the below approach
      const city = await City.findByPk(cityId);
      city.name = data.name; // values are case sensitive check proper req.body parameter while passing
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
