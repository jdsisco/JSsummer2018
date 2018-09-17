/*
 * Please put your name here
 * Name:  * Jamila Sisco*
*/


/** Points: 10
 * Write JavaScript code that creates a JavaScript object 
 * with properties for first and last name as well as student id. 
 * For the values, use your own name and student id.
 * first and last must be a type of string
 * id must be a type of number
 * 
 * @return {object} JSON
 */
function studentInfo() {
let data = {};
    
            data.first = 'Jamila';
            data.last = 'Sisco';
            data.id = 008001513;
            return data;
}


/** Points: 10
 * Given the HTML <div id="main" class="divSandbox"><p class="yourname"></p></div> 
 * put your name in the paragraph and return your name.
 * 
 * @return {String} Your Name
 */
function insertNameIntoDom(){
    
    let p = document.querySelector('p');
        p.innerHTML = "Jamila";
        return "Jamila";
  
}


/** Points: 20
 * Create a loop that will populate an array with random numbers.
 * The array size should be a random number between 10 and 20.
 * 
 * @return {array}
 */
function randomArray(){
    var items = [];
    var interior = randomNumber(10,20)
    function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            for (var k = 0; k < interior; k++) {
                    items[k] = [];
                    for (var j = 0; j < interior; j++) {
                     items[j] = interior;
                    }
                }
             return items;
             

}


/** Points: 20
 * The function returns the string repeated the number of times specified.
 * @param {String} str 
 * @param {Number} times 
 * 
 * @return {String} strRepeated
 */
function stringRepeat(str, times) {
    let string = '';
    for (let i = 0; i < times; i++)
    {
        string += str;
    }
  return string;
}


/** Points: 20
 * Given the HTML <input type="text" name="email" />
 * The function will check the value of a field.  
 * If it is empty add the class "error" to the field
 * if it is not empty remove the class error from the field.
 * 
 * @return {VOID}
 */
function validateInputField() {
    let email = document.querySelector('input[name="email"]')
        if (email.value.length ) {
        email.classList.remove('error');
    } else {
        email.classList.add('error'); 
     }
     }

/** Points: 20
 * Given the HTML <div id="main" class="divSandbox"><p class="yourname"></p></div>
 * When the div is clicked on 
 * the style property color is changed to red 
 * 
 * @return {VOID}
 */
function colorClickRed() {
    div = document.querySelector('[id="main"]').addEventListener('click', turnRed)
    function turnRed(){
        this.style.color = 'red';
    }
        
}


/** Points: 10
 * Check an array matrix of 4x4 to return the largest number found.
 * example of the array
 * [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7]]
 * and 
 * [[10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]]
 * and
 * [[10, 20, 30, 40], [100, 50, 60, 70], [80, 900, 0, 10], [4, 90, 80, 70]]
 * and
 * [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
 * 
 * @param {Array} arr 
 * 
 * @return {Number} largest
 */
function largestNumberOfFourArrays(arr){
      var row;
      var value = 0 
           for (let j = 0; j < arr.length; j++) {
               row = arr[j];
              for ( let i = 0; i < row.length; i++ ) {
                    if ( value < row[i] ) {
                       value = row[i]
                       
                    } 
                    console.log(row[i]);
                    console.log(value);
                    
                }
            
             
            } return value
}
