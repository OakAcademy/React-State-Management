import axios from "axios";

const BASE_URL = "https://reqres.in/api/users";

export const getAllUser = async () => {
  try {
    const { data } = await axios(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSelectedUser = async ({ params }) => {
  try {
    const { data } = await axios(`${BASE_URL}/${params.id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
