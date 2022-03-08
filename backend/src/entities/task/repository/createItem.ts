import db from '../../../db/instance';
import config from '../../../../config';
import { TTask } from '../types';

export default async (task: TTask) => {
  const params = {
    TableName: config.aws.dynamoDB.tableName,
    Item: task,
  };

  await db.put(params).promise();
};
