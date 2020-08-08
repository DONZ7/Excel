import axios from "axios";

export const setProductos = async (products,country) => {
  try {
    let { data } = await axios.post(`${process.env.REACT_APP_apiUrl}/setProductos`, {
      products,
      country
    });
    return data;
  } catch (error) {
    return error.message;
  }
};