import axios from 'axios';
import API_URL from '../constants/URLs';
import { TTask } from '../../types';

export default async function getService(): Promise<TTask[]> {
  try {
    const { data } = await axios.get(API_URL);

    return data as TTask[];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
