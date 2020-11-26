# time-signature-calculator
Calculate how many 4ths, 8ths, ... notes fit into your meassure in any Time-Signature



### Description

time-signature-calculator is a simple function to calculate how many notes fit into any (simple, compound is untested and wont work) time signature.

### How to use it

Tweak the array `myNotes` and put in custom note-values, or feed the array into the function as an argument.

The example array consists of 2 quarter notes, 4 sixteenth notes and 2 eighth notes, adding up to exactly one measure in a 4/4 Time Signature.
`var myNotes = [4, 4, 16, 16, 16, 16, 8, 8]`

The percentage of the note-values will be calculated and the time-signature will be used as a reference for 100%. The calculated values will be added to the currentPercentage variable until it is (approx., see floating point operations for more details) 100%.

Handle the result as desired, the function does not treat the two possible results:

- Notes in the myNotes Array are less than 100%, thus the measure is not full (and requires more notes)
- Notes in the myNotes Array exeed 100%, thus the measure is "over saturated" and needs a new measure.


### Examples

    measure("4/4")
    check @ 0
    4 is 25% of 100%. Current usage of measure is: 25
    check @ 25
    4 is 25% of 100%. Current usage of measure is: 50
    check @ 50
    16 is 6.25% of 100%. Current usage of measure is: 56.25
    check @ 57
    16 is 6.25% of 100%. Current usage of measure is: 62.5
    check @ 63
    16 is 6.25% of 100%. Current usage of measure is: 68.75
    check @ 69
    16 is 6.25% of 100%. Current usage of measure is: 75
    check @ 75
    8 is 12.5% of 100%. Current usage of measure is: 87.5
    check @ 88
    8 is 12.5% of 100%. Current usage of measure is: 100

Feel free to leave a message or create an issue, this is not under development, but it's a good starting point for like-minded people looking for a shortcut.

Code is free to use without attribution.
