# Jobs Tracker API
### This is a RESTful API developed to aid in job tracking tasks. You can use this API to create, read, update and delete job records conveniently.

## Integration and Authentication
The Jobs Tracker API is designed to be seamlessly integrated with your own frontend applications, providing a robust back-end solution for job tracking functionalities. 
The API comes with built-in authentication to ensure the security of your data.

You can implement the /auth/register and /auth/login endpoints for user registration and login, respectively. After a successful login, the user is provided with a bearer token which should be included in the header of the requests to the jobs-related endpoints (/jobs) for authentication.

## Endpoints Overview
#### Below is a brief overview of the available endpoints:

- Frontend: https://jobs-tracker-api-tig4.onrender.com

- Root API Endpoint: https://jobs-tracker-api-tig4.onrender.com/api/v1

- POST /auth/register: This endpoint is used to register a new user. It requires a JSON body with the 'name' field.

- POST /auth/login: This endpoint is used to login a user. It requires a JSON body with the 'email' and 'password' fields.

- POST /jobs: This endpoint is used to create a new job. It requires a JSON body with 'company' and 'position' fields.

- GET /jobs: This endpoint is used to retrieve all jobs. It doesn't require any parameters.

- GET /jobs/{id}: This endpoint is used to retrieve a specific job. It requires a job 'id' as a path parameter.

- PATCH /jobs/{id}: This endpoint is used to update a specific job. It requires a job 'id' as a path parameter.

- DELETE /jobs/{id}: This endpoint is used to delete a specific job. It requires a job 'id' as a path parameter.

#### For all endpoints related to jobs (/jobs), a bearer token for authentication is required.

Please refer to the [API Docs](https://jobs-tracker-api-tig4.onrender.com/api-docs) for more details, including required fields, responses, and security details. Enjoy tracking your job applications with ease!
