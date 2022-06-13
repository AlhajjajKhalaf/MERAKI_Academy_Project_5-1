import axios from "axios";

import { hostUrl } from "..";

export class Employee {
  static async createMeal({
    name,
    imgUrl,
    category,
    price,
    restaurant_id,
    token,
  }) {
    const body = {
      name,
      imgUrl,
      category,
      price,
      restaurant_id,
    };
    try {
      const response = await axios.post(`${hostUrl}/employee/`, body, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        serverError: error.response.data.message,
      };
    }
  }
}
