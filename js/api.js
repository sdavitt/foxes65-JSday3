// Fetching data from an API using Axios
const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers');
    console.log(response);
    console.log(response.data);
    return response.data
}

// wait for getData to finish, then log out a piece of it
let console_load_data = async () => {
    let data = await getData();
    console.log(data[4]['power-coin']);
}

// start our asynchronous processes with the initial function call
// use line 17 just for display in browser console
// console_load_data();


// create constant variable(s) to hold our DOM elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}

// Function to create the Ranger List HTML
const create_list = ( id, name ) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function that actually makes our api call and function call to display new data
const load_data = async () => {
    let data = await getData();

    data.forEach( element => create_list(element.id, element['power-coin']) );
}

// Function for clearing data
const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}