var config = {
    apiKey: "AIzaSyBOoGzSsTAw5WmwuNSVBpzhAEl8TRaopY4",
    authDomain: "firetrain-b1351.firebaseapp.com",
    databaseURL: "https://firetrain-b1351.firebaseio.com",
    projectId: "firetrain-b1351",
    storageBucket: "",
    messagingSenderId: "956980178330"
  };

  firebase.initializeApp(config);

  let database = firebase.database()

  let trainsArr = []
  
  let newTrain;
  let newDest;
  let newFreq;
  let newStart;

  let trainName = $("#train-name")
  let trainDest = $("#train-dest")
  let trainStart = $("#train-start")
  let trainFreq = $("#train-freq")

  let trainTable = $("#train-table")

  let submitBtn = $("#submit-button")


database.ref().on("value", function(snapshot) {

  trainsArr = snapshot.val().trains

  for (let i = 0; i < trainsArr.length; i++) {
    let currentTrain = trainsArr[i]

    let newTR = $("<tr>")
    let nameData = $("<td>").text(currentTrain.name)
    let destData = $("<td>").text(currentTrain.dest)
    let startData = $("<td>").text(currentTrain.start)
    let freqData = $("<td>").text(currentTrain.freq)

    newTR.append(nameData, destData, startData, newFreq)
    
    trainTable.append(newTR)
    

  }
})

submitBtn.on("click", function () {

  newTrain = trainName.val()
  newDest = trainDest.val()
  newStart = trainStart.val()
  newFreq = trainFreq.val()
  

  trainName.val("")
  trainDest.val("")
  trainStart.val("")
  trainFreq.val("")

  let newTrainObj = {
    name: newTrain,
    dest: newDest,
    start: newStart,
    freq: newFreq
  }


  trainsArr.push(newTrainObj)

  database.ref().set({
    trains: trainsArr,
})


})
