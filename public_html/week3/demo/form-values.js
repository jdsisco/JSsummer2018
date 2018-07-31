
/* Use query selector to select the html object you
 * want to access and change. 
 * 
 */
let label = document.querySelector('label');
let textField = document.querySelector('input[name="words"]');
let addTextBtn = document.querySelector('input[name="add"]');
let divToAdd = document.querySelector('div');

/*
 * The addEventListener allows you to respond to the
 * user on the page based on an action the user did
 * 
 * in this case then the user clicks on the button 
 * it will run a function.
 */
addTextBtn.addEventListener('click',addText );

/* To add another Event just call the function again
 * with another event and function
 * addTextBtn.addEventListener('mousemove',addText );
 */


/*
 * this is the format for creating a function in JavaScript.
 * 
 * you can call it like so: addText();
 */
function addText() {
        console.log(textField.name)
        console.log(textField.type)
        console.log(textField.value)
      
    if ( textField.value.length /* Shortcut for value, as long as something is entered, it is true*/) {
         //textField refers to the HTML input in the HTML file.
        label.classList.remove('error'); 
       
        let result = '<p>' + textField.value + '</p>';
        divToAdd.innerHTML += result;
        textField.value = '';
        // Also can write divToAdd.innerHTML +=`<p>$textField.value$</p>`; The same as the two top lines.
    } else {
        label.classList.add('error'); 
     }
    
}


