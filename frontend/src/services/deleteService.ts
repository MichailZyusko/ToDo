import axios from 'axios';
import API_URL from '../constants/URLs';

export default async function deleteService(id: string): Promise<boolean> {
  try {
    const url = `${API_URL}/${id}`;
    const { status } = await axios.delete(url);

    return status === 204;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
