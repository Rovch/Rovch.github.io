$(document).ready(function () {

  var d = new Date().getUTCHours();
  function hours12(date) {
    return (date.getHours() + 24) % 12 || 12;
  }


  var lolol = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(lolol);
  console.log(d);
  //global vars
  var db;
  var data;
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjBtc-zDVSM4fKl87CFlT4lypK46hBVWY",
    authDomain: "trainhw-1313.firebaseapp.com",
    databaseURL: "https://trainhw-1313.firebaseio.com",
    projectId: "trainhw-1313",
    storageBucket: "",
    messagingSenderId: "238360853932"
  };

  firebase.initializeApp(config);
  db = firebase.database();

  submitData1();

  function submitData1() {
    var ref = db.ref("newTrain");
    ref.on("value", getData);
  }

  //submit button for retrieving user data
  $("#submitBtn").on("click", function () {
    submitData();
  });

  //function to grab actual input
  function submitData() {

    // add it to a javascript object
    var data = {
      trainName: $("#nameInput").val().trim(),
      dest: $("#destInput").val().trim(),
      trainTime: d,
      trainFrq: $("#frqInput").val().trim(),
    }

    //pushes data obj to firebase node "newTrain"
    var ref = db.ref("newTrain");
    ref.push(data);
    ref.on("value", getData);
  }

  function getData(data) {
    //clear out current data to stop from having duplicates
    $(".clearStuff").remove();

    //trains = each branch in "newTrain"
    var trains = data.val();

    //stores each branch in the "newTrain" node to an array
    var keys = Object.keys(trains);
    console.log(keys);
    //iterates through each branch in the "newTrain" node using keys
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      //creating temp vars to store input from current data OBJ
      var tName = trains[k].trainName;
      var tFrq = trains[k].trainFrq;
      var tTime = trains[k].trainTime;
      var dest = trains[k].dest;

      //creates a new html row with four <td>'s
      var newRow = $("<tr>");
      newRow.attr("class", "clearStuff");
      var newD1 = $("<td>" + tName + "</td>");
      var newD2 = $("<td>" + tFrq + "</td>");
      var newD3 = $("<td>" + tTime + "</td>");
      var newD4 = $("<td>" + dest + "</td>");

      //append all the data to the new html created above
      $(".lol2").append(newRow);
      newRow.append(newD1);
      newRow.append(newD4);
      newRow.append(newD3);
      newRow.append(newD2);
    }
  }
});