import db from '../../../db/instance';
import config from '../../../../config';

export default async ({ id }: { id: string }) => {
  const params = {
    TableName: config.aws.dynamoDB.tableName,
    Key: { id },
  };

  await db.delete(params).promise();
};
