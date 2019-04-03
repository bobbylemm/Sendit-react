# Sendit-react

[![Build Status](https://travis-ci.com/bobbylemm/Sendit-react.svg?branch=staging)](https://travis-ci.com/bobbylemm/Sendit-react)
[![Coverage Status](https://coveralls.io/repos/github/bobbylemm/Sendit-react/badge.svg?branch=ft-create-view-parcel-165018981)](https://coveralls.io/github/bobbylemm/Sendit-react?branch=ft-create-view-parcel-165018981)

# SendIT

SendIT is a courier service that helps users deliver parcels to different
destinations.

## How it works

- Users can:

  - Create a parcel delivery order
  - Get all their parcel delivery orders
  - Update a parcel dropoff location
  - Cancel a parcel delivery order

- Admins can:
  - Get all parcel delivery orders in the application
  - Update a parcel pickup location
  - Update a parcel delivery order status

## Technologies

- Nodejs(ES6)
- Git
- NPM
- Express
- Babel

## Linting Library

- Eslint

## Installation

Ensure you have the technologies installed then you can clone this repository
with the URL from the <code> clone or download button on this page </code> using
<code> git clone _cloned url copied_ </code> in your local machine. Afterwards,
run <code> npm install </code> and run <code> npm run devstart </code> for a
quick start. Or you may build first, using <code> npm run build </code> then run
<code> npm start </code>. If you only want to access the completed work, you
will find the link to the hosted work at the bottom of this readme, you don't
have to clone this repository!

## Test

Mocha is the testing framework together with chai assertion library

- You can run test after installation using <code> npm run test </code>

<h3>ENDPOINTS</h3>
<hr>
<table>
  <tr>
      <th>HTTP Request</th>
      <th>End Point</th>
      <th>Functionality</th
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/parcels</td>
      <td>Fetch all parcel delivery orders</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/parcels/:parcelId</td>
      <td>Fetch a specific parcel delivery order</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/users/:userId/parcels</td>
      <td>Fetch all parcel delivery orders by a specific user</td>
  </tr>
   <tr>
      <td>PUT</td>
      <td>/api/v1/parcels/:parcelId/cancel</td>
      <td>Cancel the specific parcel delivery order</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/parcels</td>
      <td>Create a parcel delivery order</td>
  </tr>
  <tr>
      <td>PUT</td>
      <td>/api/v1/parcels/:parcelId/status</td>
      <td>change the status of a parcel order </td>
  </tr>
  <tr>
      <td>PUT</td>
      <td>/api/v1/parcels/:parcelId/presentLocation</td>
      <td>change the present location of a parcel order </td>
  </tr>
  <tr>
      <td>PUT</td>
      <td>/api/v1/parcels/:parcelId/destination</td>
      <td>change the destination of a parcel order </td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/users/auth/resetpassword</td>
      <td>sent email to user to reset password</td>
  </tr>
  <tr>
      <td>PUT</td>
      <td>/api/v1/users/auth/resetpassword</td>
      <td>Change to new user password</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/auth/signup</td>
      <td>sign up users </td>
  </tr>
   <tr>
      <td>POST</td>
      <td>/api/v1/auth/login</td>
      <td>login users </td>
  </tr>
   <tr>
      <td>GET</td>
      <td>/api/v1/users/:userId/:parcelId</td>
      <td>Fetch a user particular parcel order </td>
  </tr>
</table>

<br/>
<hr>

You can access the app here https://sendit-bobbylemm.herokuapp.com/ You can also
access the API documentation at
https://fathomless-spire-38172.herokuapp.com/swagger/
