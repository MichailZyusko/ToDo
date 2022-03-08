import db from './instance';
import { TTask } from '../../../types';
import config from '../../../../config';

export default async (): Promise<TTask[]> => {
  const params = { TableName: config.aws.dynamoDB.tableName };
  const { Items } = (await db.scan(params)
    .promise()) as unknown as { Items: TTask[] };

  return Items;
};
