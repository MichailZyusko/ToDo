import dotenv from 'dotenv';

dotenv.config();

type Environment = {
  app: {
    port: number;
    host: string;
  };
  aws: {
    dynamoDB: {
      tableName: string;
    };
  };
};
type Config = Record<string, Environment>;

const dev: Environment = {
  app: {
    port: Number.parseInt(process?.env?.APP_PORT?.toString() ?? '3001', 10),
    host: process.env.APP_HOST ?? 'localhost',
  },
  aws: {
    dynamoDB: {
      tableName: process.env.AWS_DYNAMODB_TABLE_NAME ?? '',
    },
  },
};

const config: Config = {
  dev,
};

export default config[process?.env?.NODE_ENV ?? 'dev'];
