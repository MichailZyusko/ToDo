import axios from 'axios';
import { API_URL } from '../constants/HTTP';
import { TTask } from '../../types';

export default async function getService(): Promise<TTask[] | null> {
  try {
    const response = await axios.get(API_URL);

    return response.data as TTask[];
  } catch (error) {
    console.log(error);
    return null;
  }
}
