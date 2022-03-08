import axios from 'axios';
import API_URL from '../constants/URLs';
import { TTask } from '../../types';

export default async function creatingService(label: string): Promise<TTask> {
  try {
    const response = await axios.post(API_URL, { label });

    return response.data as TTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
