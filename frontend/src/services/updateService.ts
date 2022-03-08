import axios from 'axios';
import API_URL from '../constants/URLs';
import { TTask } from '../../types';

export default async function updatingService(id: string): Promise<TTask> {
  try {
    const url = `${API_URL}/${id}`;
    const { data } = await axios.put(url);

    return data as TTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
