import { ENDPOINT }from"./endpoint"
import { showDogs } from "./displayDogs"


//Typescript type for the dog object
type Dogs = {
    id: number
    breed: string
    name: string
  }

// Fetch the list of dogs from the API and display them
export const getDogs = async () => {
    try {
        let response = await fetch(ENDPOINT);
        let data = await response.json();
        console.log(data);
        showDogs(data);
    } catch (error) {
        console.log(error);
    }
};



// Add a new dog to the database via the API
export const addDog = async (breed: Dogs['breed'], name: Dogs['name']) => {
    let newDog = {
        breed: breed,
        name: name
    };
    try {
        let response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDog)
        });
        let data = await response.json();
        console.log(data);
        getDogs(); 
    } catch (error) {
        console.error('Error:', error);
    }
};


// Delete a dog from the database via the API
export const deleteDog = async (e: Event , id: number) => {
    e.preventDefault();
    try {
        let response = await fetch(ENDPOINT + "/" + id, {
            method: 'DELETE'
        });
        let data = await response.json();
        console.log(data); // Log the response
        getDogs(); // Refresh the list of dogs
    } catch (error) {
        console.error('Fetch error:', error);
    }
};
