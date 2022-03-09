# ToDo
API for creating and retrieving todo tasks from AWS Dynamodb via API Gateway and Lambda functions.

# How to use it
To use this API you need to:<br>
- have [AWS account](https://aws.amazon.com/)
- install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- provide your credentials using the command executed by AWS CLI:<br>
  `aws configure`

### Deploy

To deploy API on AWS services provided in serverless.yml file you need
to install the serverless CLI by running command:<br>
`npm install -g serverless`<br>
and then run:<br>
`serverless deploy`<br>
You can get more information about serverless framework by link: https://www.serverless.com/
