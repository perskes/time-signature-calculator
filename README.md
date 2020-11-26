### Description

time-signature-calculator is a simple function to calculate how many notes fit into any (simple only, compound is untested and wont work) time signature.

### How to use it

Tweak the array `myNotes` and put in custom note-values, or feed the array into the function as an argument.

The example array consists of 2 quarter notes, 4 sixteenth notes and 2 eighth notes, adding up to exactly one measure in a 4/4 Time Signature.
`var myNotes = [4, 4, 16, 16, 16, 16, 8, 8]`

The percentage of the [note values](https://en.wikipedia.org/wiki/Note_value "note values") will be calculated and the [time signature](http://https://en.wikipedia.org/wiki/Time_signature#:~:text=The%20time%20signature%20(also%20known,is%20equivalent%20to%20a%20beat. "time signature") will be used as a reference for 100%. The calculated values will be added to the `currentPercentage` variable until it is (**approx**., see [floating point operations](https://stackoverflow.com/a/16082201 "floating point operations") for more details) 100%.

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

Another example:

    measure("12/8")
    check @ 0
    4 is 16.666666666666664% of 100%. Current usage of measure is: 16.666666666666664
    check @ 17
    4 is 16.666666666666664% of 100%. Current usage of measure is: 33.33333333333333
    check @ 34
    16 is 4.166666666666666% of 100%. Current usage of measure is: 37.49999999999999
    check @ 38
    16 is 4.166666666666666% of 100%. Current usage of measure is: 41.66666666666666
    check @ 42
    16 is 4.166666666666666% of 100%. Current usage of measure is: 45.83333333333332
    check @ 46
    16 is 4.166666666666666% of 100%. Current usage of measure is: 49.999999999999986
    check @ 50
    8 is 8.333333333333332% of 100%. Current usage of measure is: 58.333333333333314
    check @ 59
    8 is 8.333333333333332% of 100%. Current usage of measure is: 66.66666666666664
    check @ 67
    4 is 16.666666666666664% of 100%. Current usage of measure is: 83.33333333333331
    check @ 84
    4 is 16.666666666666664% of 100%. Current usage of measure is: 99.99999999999997



Feel free to leave a message or create an issue, this is not under development, but it's a good starting point for like-minded people looking for a shortcut.


MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

