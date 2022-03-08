import axios from 'axios';
import API_URL from '../constants/URLs';
import { TTask } from '../../types';

export default async function creatingService(label: string): Promise<TTask> {
  try {
    const { data } = await axios.post(API_URL, { label });

    return data as TTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
