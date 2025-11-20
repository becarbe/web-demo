//change 5 to the total number of questions
var total=6
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Superb!"
compliments[1]="That was a no brainer!"
compliments[2]="You clearly have a knack for this!"
compliments[3]="Right on $$$."
compliments[4]="Excellent!"
compliments[5]="Nice Job!"
compliments[6]="Excellence Achieved!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What are the colors of the Jamaican flag?"
choice1[1]="Red, white and blue."
choice1[2]="Pink & Green."
choice1[3]="Black, Green and Gold"
choice1[4]="I have no idea."

question[2]="What is the capital of Jamaica?"
choice2[1]="Port Royal"
choice2[2]="Manchester"
choice2[3]="Norman Manley"
choice2[4]="Kingston"

question[3]="What is the National Fruit of Jamaica?"
choice3[1]="Ackee"
choice3[2]="Saltfish"
choice3[3]="Banana"
choice3[4]="Star Apple"

question[4]="What is the national bird of Jamaica?"
choice4[1]="Mocking Jay"
choice4[2]="Hummingbird"
choice4[3]="Bluebird"
choice4[4]="Dove"

question[5]="Which official title is used to refer to Jamaica's head of state?"
choice5[1]="Governor General"
choice5[2]="Chief Justice"
choice5[3]="Prime Minister"
choice5[4]="President"

question[6]="What is the highest point in Jamaica, known for its world-famous coffee production?"
choice5[1]="Cockpit Country"
choice5[2]="Mount Diablo"
choice5[3]="Mount Everest"
choice5[4]="Blue Mountain Peak"


solution[1]="c"
solution[2]="d"
solution[3]="a"
solution[4]="b"
solution[5]="c"
solution[6]="d"
