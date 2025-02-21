const { CityService } = require("../services/index.js");
const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const cityService = new CityService();

const create = asyncHandler(async (req, res) => {
  const city = await cityService.createCity(req.body);

  if (!city) {
    throw new ApiError(500, "Not able to create city");
  }

  return res
    .status(201) // 201 is created request
    .json(new ApiResponse(201, city, "city created successfully !"));
});

const destroy = asyncHandler(async (req, res) => {
  const response = await cityService.deleteCity(req.params.id);

  if (!response) {
    throw new ApiError(500, "Not able to delete city");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, response, "city deleted successfully !"));
});

const get = asyncHandler(async (req, res) => {
  const response = await cityService.getCity(req.params.id);

  if (!response) {
    throw new ApiError(500, response, "Not able to get city");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, response, "city fetched successfully !"));
});

const getAll = asyncHandler(async (req, res) => {
  const cities = await cityService.getAllCities(req.query); // beacuse request is comming from query params
  if (!cities) {
    throw new ApiError(404, "Cities not found!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, cities, "All cities are fetched successfully!"));
});

const update = asyncHandler(async (req, res) => {
  const response = await cityService.updateCity(req.params.id, req.body);
  if (!response) {
    throw new ApiError(500, "Not able to update city");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, response, "city updated successfully !"));
});

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
