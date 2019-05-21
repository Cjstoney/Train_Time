$(document).ready(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyCdv5LU-61B-j-5gt9OToSAgXRycM5F4Vo",
        authDomain: "train-time-89ca7.firebaseapp.com",
        databaseURL: "https://train-time-89ca7.firebaseio.com",
        projectId: "train-time-89ca7",
        storageBucket: "train-time-89ca7.appspot.com",
        messagingSenderId: "82379773285",
        appId: "1:82379773285:web:cbb43d661089026a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // var for database
    var database = firebase.database();

    // console logging the database
    console.log(database);

    // var for inputs
    var trainName = "";
    var destination = "";
    var firstTrainTime = "";
    var frequency = "";

    // on click function for submit button
    $('#submit-button').on('click',function(event){
        event.preventDefault();
        trainTime = $('#train-time').val();
        destination = $('#destination').val();
        firstTrainTime = $('#first-train-time').val();
        frequency = $('#frequency').val();
    })
})