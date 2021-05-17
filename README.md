# My-Restful-API

This is a RESTful API for an uptime monitoring application. There is no use of any NPM packages, however a large number of built in modules are used.

An uptime monitoring app allows users to enter URLs they want monitored, and receive alerts when those resources go down or come back up.

The app is useable and includes features such as user sign-up, sign-in, sign-out and edit their settings.

Other functionalities include sending an sms alert to a user, rather than email.

## Functionalities

1. The API listens on a port and accepts incoming HTTP requests for POST, GET, PUT, DELETE and HEAD.

2. The API allows a client to connect and then create a new user, then edit and delete that user.

3. The API allows a user to "sign in" which gives them a token that they can use for subsequent authenticated requests.

4. The API allows the user to "sign out" which invalidates their token.

5. The API allows a signed-in user to use their token to create a new "check".

6. The API allows a signed-in user to edit or delete any of their checks.

7. In the background, workers perform all the checks at the appropriate times, and send alerts to the users when a check changes its state from up to down or vice versa.
