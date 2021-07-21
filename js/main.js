// Using JavaScript with the DOM (Document Object Model)

// selecting all elements of tag 'h1'
console.log( document.getElementsByTagName('h1') );
//lets change the text of one of our h1 elements
console.log( document.getElementsByTagName('h1')[1].innerHTML = 'New Text! Changed with JavaScript.' );

// set up selecting and adding functionality to my #color-button button
let color_button = document.getElementById('color-button');
console.log(color_button);

let color_change = () => {
    let current_text = document.getElementById('toChange')
    console.log(current_text)
    if (current_text.className != 'color-change'){
        document.getElementById('toChange').innerHTML = 'Changed the color to green with JS!'
        document.getElementById('toChange').className = 'color-change'
    }
    else{
        document.getElementById('toChange').innerHTML = 'Changed the color back to black with JS!'
        document.getElementById('toChange').className = ''
    }
}

// set up our event listener to "listen" for the button click
// add an event listener to the color_button 
// so that color_change() runs when color_button is clicked
color_button.addEventListener('click', color_change)

// Not only do we have the ability to modify previously existing HTML using javascript
// We can actually create new HTML using our javascript


// Let's add a second button to our HTML through JS
let button = document.createElement('button');
let button_display = document.createElement('h2');
// add some text to the button
button.innerHTML = 'What is my purpose?';
document.body.append(button);

let showMeThatButtonDisplay = () => {
    if (button.innerHTML == 'Oh no.'){
        console.log('if test');
        button.innerHTML = 'What is my purpose?'
        button_display.innerHTML = ''
    } else if (button_display.innerHTML == 'You pass butter.'){
        console.log('else if test');
        button.innerHTML = 'Oh no.';
    }
    else {
        console.log('else test');
    button_display.innerHTML = 'You pass butter.';
    document.body.append(button_display);
    }
}

button.addEventListener('click', showMeThatButtonDisplay);


// Next rather important thing - getting form data from HTML into our JavaScript!
const form = document.querySelector('#testDataForm');
console.log(form);

// Add an event listener to do stuff when the submit button on that form is clicked!
form.addEventListener('submit', ( event ) => {
    // stop the submit button from reloading the page
    event.preventDefault();
    
    //gather our data
    let query_animal = document.querySelector('#animal');
    let query_name = document.querySelector('#name');
    // display elements from our form through querySelector
    console.log(query_name, query_animal);

    //gather data through the event
    console.log(event);
    // to get the value from a form input field will be
    // event.path[0][index_of_input_field].value
    let animal = event.path[0][0].value;
    let name = event.path[0][1].value;
    // once you've saved them as variables, they're just normal javascript strings you can do whatever with
    console.log(`This data comes from the event: ${name} the ${animal}`);
    
    // unnecessary extra step -> creating a new document element with the form data
    let new_h2 = document.createElement('h2');
    new_h2.innerHTML = `Salvador Dali had a pet ${animal} named ${name}.`;
    new_h2.className = 'color-change';
    document.body.append(new_h2);
}
);
