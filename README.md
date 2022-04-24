# Heading North ✈️

Find the best flight offers for your favorite destinations.

## About 🎓

This project was carried out under an enviroment of agile development methodology. This was done is a period of three weeks and then evaluated by Henry's staff as a requirement to complete the bootcamp and receive a Full Stack Web Developer certificate.

## Project features 💻

This is a web-app was developed with the MERN stack which stands for MongoDB, Express, React, Node. This project is about a website that sells plane tickets offers. It has an authentication, registration and login system for users to save their shopping cart, paid orders, and favorite destinations. It is also connected to a payment system like Stripe.

## Details

**Authentication**: The app has security standards since ir encripts the passwords stored in our database. In addition, through tokens users can verify their email, recover and change their password.

**Adaptability**: For the convenience of users, our application has a responsive desing so that it can be viewed form any device.

**Database Storage**: If the user want to change the device when he is choosing destinations, the  flights loaded in the cart are saved in our database to that they do not lose that information and have to search again.

**Panel Admin**: By logging in as an admin you can see all the orders and to which user they belong and edit them. The admin can move a user to admin, as well as remove it from the database.
## Authors ✒️

* **Cristian Vera** - *Frontend Developer*- [CristianV1](https://github.com/CristianV1)
* **Mathias Ledesma** - *Frontend Developer*- [mathyled](https://github.com/mathyled)
* **Manuel Paredes** - *Frontend Developer* - [mapa-99](https://github.com/mapa-99)
* **Alexis Campusano** - *Backend Developer* - [aleecmp](https://github.com/aleecmp)
* **Esteban Gimenez** - *Backend Developer*- [EstebanGimenez](https://github.com/EstebanGimenez)
* **Ezequiel Juarez** - *Backend Developer* - [EzeJuarez](https://github.com/EzeJuarez)
* **Maria Emilia Rivero** - *Backend Developer*- [memiliarivero](https://github.com/memiliarivero)

****
## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Clone the repository 📋

You will get a folder with two subfolders inside.
## Install dependencies and initialize them 🔧

Inside the client folder 📂
```
npm install
npm start
```
Inside the api folder 📂
```
npm install
npm run dev
```
*It is necessary to have at least the latest stable version of Node and NPM*


## Enviroment Variables 🔑

You must create a .env file in each folder with your own enviroment variables
### Backend

```
PORT=3001
```
Create a database in [MongoDB](https://www.mongodb.com/) and save the code on this variable
```
DB_URI
```
Get a free API KEY from [aviationstack](https://aviationstack.com/)
```
AVIATION_API_KEY
```
The value of these variables can be freely assigned
```
PASS_SEC
JWT_SEC
```
To use the nodemailer module you must use an email and a password for applications
```
EMAIL_USER
EMAIL_PASS
```
To use the passport-google-oauth20 module you must create a project in [google](https://console.developers.google.com/) and get credentials

```
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_CALLBACK_URL
```

### Frontend
