import axios from "axios";

export const getParkingData = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/parking");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
