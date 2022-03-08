import db from '../../../db/instance';
import config from '../../../../config';
import { TTask } from '../types';

export default async ({ id }: { id: string }): Promise<TTask> => {
  const params = {
    TableName: config.aws.dynamoDB.tableName,
    Key: { id },
    UpdateExpression: 'set isCompleted = isCompleted + :value',
    ExpressionAttributeValues: {
      ':value': 1,
    },
    ReturnValues: 'ALL_NEW',
  };

  const { Attributes } = (await db.update(params)
    .promise()) as unknown as { Attributes: TTask };

  return Attributes;
};
