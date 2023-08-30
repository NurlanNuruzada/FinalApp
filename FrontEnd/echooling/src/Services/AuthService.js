import { httpClient } from "../Utils/HttpClient";

export const login = async (data) => {
  try {
    const response = await httpClient.post('api/Auth/Login', data);
    console.log('Response:', response);
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await httpClient.post('api/Auth/Register', data);
    console.log('Response:', response);
    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const ConfirmEmail = async(data) =>{
  const response = await httpClient.post('api/ConfirmEmail/ConfirmEmai',data)
  console.log('Response:', response);
}