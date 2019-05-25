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
        // console.log("i was clicked")
        event.preventDefault();
        trainName = $('#train-name').val();
        // console.log(trainName);
        destination = $('#destination').val();
        // console.log(destination);
        firstTrainTime = $('#first-train-time').val();
        // console.log(firstTrainTime);
        frequency = $('#frequency').val();
        // console.log(frequency);

        database.ref().push({
            time: trainName,
            destination: destination,
            firstTrain: firstTrainTime,
            frequency: frequency,
        })

        $('#train-name').val("");
        $('#destination').val("");
        $('#first-train-time').val("");
        $('#frequency').val("");
  
    })

    database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().time;
        var trainDestination = childSnapshot.val().destination;
        var firstTrainTime = childSnapshot.val().firstTrain;
        var trainFrequency = childSnapshot.val().frequency;

        console.log(trainName);
        console.log(trainDestination);
        console.log(firstTrainTime);
        console.log(trainFrequency);

        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDestination),
            $("<td>").text(firstTrainTime),
            $("<td>").text(trainFrequency)
        );

        $("#table-body").append(newRow);
    });

   
})