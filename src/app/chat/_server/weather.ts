import { zodFunction } from "openai/helpers/zod.mjs";
import { z } from "zod";

export const GetWeatherParameters = z.object({
  location: z.string().describe("City and country e.g. Bogotá, Colombia"),
});

export type GetWeatherParameters = z.infer<typeof GetWeatherParameters>;

export const getWeatherToolName = "getWeather";

export const getWeather = zodFunction({
  name: getWeatherToolName,
  parameters: GetWeatherParameters,
});

export const handleGetWeather = async (parameters: GetWeatherParameters) => {
  return `the weather in ${parameters.location} is very nice`;
};
