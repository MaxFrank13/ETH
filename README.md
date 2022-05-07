# ETH

Edit Text Here is the latest and greatest text editor to hit the scene. Don't miss out and make sure to get ETH!

## Description

Enter Text Here is a progressive web app created using Webpack and various plugins. With the implementation of caching and service workers, the app is able to run offline and still persistently store the data. Of course, in order to initially install the app, the user must be online. However, once installed onto the user's device, it will run just like any other native application!

![Screenshot of native application](https://github.com/MaxFrank13/ETH/blob/main/client/src/images/eth-app-photo.PNG)

[ETH: it's not what you think](https://polar-eyrie-98965.herokuapp.com/)

## Installation

   - Clone this repository to receive all of the files
   - Run "npm install" in the command line of your terminal to set up dependencies in the root and client directories
   - Go into the server folder and run "npm install" as well
   - Make sure you have MongoDB installed
   - There is no seed data provided for this app
   - Run "npm start" to start the application's connection
   - Go to the url of the application (http//:localhost:3000) and you'll see it running

## Usage

The app is listening for the editor's content to change. Anytime a letter is typed into the editor, that text gets saved to local storage. As soon as the user changes focus away from the editor (i.e. by clicking outside the app), this will trigger the IndexDB put route to add the new content to our application's storage. Storing this information in IndexDB makes it unique the app and not the browser (like local storage would do). Moreover, this is what allows us to keep the data persistent when the user is offline.




