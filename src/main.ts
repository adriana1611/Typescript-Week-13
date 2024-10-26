//Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';
import { getDogs, addDog, } from "./api"



export type Dogs = {
  id: number
  breed: string
  name: string
}

// Add event listener to the "Add" button to handle form submission
let addButton = document.getElementById('addButton');
addButton!.addEventListener('click', function(e) {
    e.preventDefault();
    let breed = (document.getElementById('breed') as HTMLInputElement).value;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    addDog(breed, name); // calls addDog function with the provided breed & name 
});


// Initial fetch to get the list of dogs
getDogs();
