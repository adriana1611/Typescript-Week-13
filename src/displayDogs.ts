import { deleteDog } from './api'
import { Dogs } from "./endpoint"

//Function to display the list of dogs in an HTML table 
export function showDogs(data: Dogs[]) {
    let container = document.getElementById('showData');
    container!.innerHTML = '';

    let table = document.createElement('table');
    table.innerHTML = '';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');


    // Create header row 
    let headerRow = document.createElement('tr');
    let breedHeader = document.createElement('th');
    breedHeader.innerText = 'Breed';
    let nameHeader = document.createElement('th');
    nameHeader.innerText = 'Name';
    let actionHeader = document.createElement('th');
    actionHeader.innerText = 'Actions';

//Append header cells to the header row
    headerRow.appendChild(breedHeader);
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(actionHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);


    // Create rows for each dog
    for (let dog of data) {
        let row = document.createElement('tr');

//Create cells for breed and name
        let breedCell = document.createElement('td');
        breedCell.innerText = dog.breed;
        let nameCell = document.createElement('td');
        nameCell.innerText = dog.name;

//Create action cell with a delete button for each dog
        let actionCell = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function(e) {
            deleteDog(e, dog.id);
        });


        actionCell.appendChild(deleteButton);
        row.appendChild(breedCell);
        row.appendChild(nameCell);
        row.appendChild(actionCell);
        tbody.appendChild(row);
    }


    table.appendChild(tbody);
    container!.appendChild(table); //maybe !
}

