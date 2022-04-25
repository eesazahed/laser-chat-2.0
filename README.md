# Laser Chat 2.0

![preview](https://user-images.githubusercontent.com/97064249/165171261-9f1019cb-9b6d-4816-aa53-f1b43da8c086.png)


This is an open chat web app that I made using Google Firebase.

# Hosting a server

To host your own chat server, first open the terminal and type in `git clone https://github.com/EesaZahed/laser-chat.git`. Next, type `cd laser-chat` and `npm i react` in the terminal.

Next, create a Google Firebase web project at https://console.firebase.google.com/, and enable a firestore database, and also add a method for user authentication with an emailed sign-in link. Once you create your project, go to your project settings, and copy the `firebaseConfig` object, and paste it in `src/firebase/config.js`.

To finally run it, type in the terminal of your project's directory `npm start`.

Your chat server is online and anyone with your API keys in the firebaseConfig object can edit your database. For more information about Firebase security, please read more about this at https://firebase.google.com/docs/projects/api-keys.

For your database rules, use the following:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  
		match /users/{id} {
      allow read, create, update: if isUserAuthenticated();
    }
    
    match /messages/{id} {
      allow read, create : if isUserAuthenticated();
    }
  
    
  	function isUserAuthenticated() {
      return request.auth.uid != null; 
    }
  }
```

# If you come across any errors, please let me know immediately. You can comment or email me at ESZHD1@gmail.com
