/**
 * measure - calculate how many notes fit into your measure
 *
 * @param  {string} timeSignature for Example "12/8", "4/4", ...
 * @return {type}               no return value
 */
function measure(timeSignature) {

  var beats = timeSignature.split("/")[0]
  var interval = timeSignature.split("/")[1]

  var dummy = 1 / interval
  var totalValue = dummy * beats

  var totalPercentage = 100
  var currentPercentage = 0

  // note values only (split the note and the note value. e1|4 -> split at | and use value 4 (quarter note))
  var myNotes = [4, 4, 16, 16, 16, 16, 8, 8]

  var counter = 0

  // put this for loop in another loop if you have more than one meassure, reset currentPercentage, set
  for (var x = counter; Math.ceil(currentPercentage) < 100; x++) {
    console.log("check @", Math.ceil(currentPercentage))

    var myNote = myNotes[x]

    v2 = (1 / myNote)

    percentage = parseFloat((v2 / totalValue) * 100)

    currentPercentage = currentPercentage + percentage
    console.log(myNote + " is " + percentage + "% of " + totalPercentage + "%. Current usage of measure is: " + currentPercentage)
    if (x > 1000) {
      // break loop to prevent infinit loops during testing
      break;
    }
    counter = counter + 1
  }


  console.log("Total Notes in measure:", counter, "Measure is full.")

  //Continue with new measure here and restart loop, use x = counter to keep going from the last value of your values array.
}
