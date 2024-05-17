const { where } = require("sequelize");
const { City } = require("../models/index.js");

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
      const city = await City.findByPK(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
