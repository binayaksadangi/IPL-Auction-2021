// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBe8gmgnXYKIgJiC8fMTBsHHcaSjRI9UVY',
  authDomain: 'iplauction-2021-4cec1.firebaseapp.com',
  projectId: 'iplauction-2021-4cec1',
  storageBucket: 'iplauction-2021-4cec1.appspot.com',
  messagingSenderId: '476516664360',
  appId: '1:476516664360:web:a0d2354cfa66d25959a11d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//let registration = firebase.database().ref('registrations');
let contactUs = firebase.database().ref('contactRequest');

document
  .querySelector('.php-email-form')
  .addEventListener('submit', submitContactForm);

function submitContactForm(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const subject = document.querySelector('#subject').value;
  console.log(name, email, message, subject);
  saveContactInfo(name, email, message, subject);
  document.querySelector('.php-email-form').reset();
}
//push the data to collections
function saveContactInfo(name, email, message, subject) {
  let newContactUs = contactUs.push();

  newContactUs.set({
    Name: name,
    Email: email,
    Subject: subject,
    Message: message,
  });
}
