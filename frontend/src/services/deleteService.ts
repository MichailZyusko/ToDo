import axios from 'axios';
import { API_URL } from '../constants/HTTP';
import checkResponseStatus from '../helpers/checkRespnseStatus';

export default async function deleteService(id: string): Promise<boolean> {
  try {
    const url = `${API_URL}/${id}`;
    const response = await axios.delete(url);

    return checkResponseStatus(response.status);
  } catch (error) {
    console.log(error);
    return false;
  }
}
