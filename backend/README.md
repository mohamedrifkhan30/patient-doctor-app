# PatientDoctorAppBackend
  Backend API
   Node version - 14.21

## Development server

1. Confirm the ENV setup in nodemon.json file.
2. NPM install
3. start:server


## Production server
1. Confirm the ENV setup in .env file.
2. NPM install
3. docker build -t patient-doctor-bk:1.0 .
4. docker run --name patidoc-fe-container -d -p 4201:80 patient-doctor-app:1.0