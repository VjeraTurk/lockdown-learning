// create function that gets data from the inputs and create a new person table row 
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

/* 
      <tr>
        <td>David</td>
        <td>Abram</td>
        <td>30</td>
        <td><input type="button" value="remove" /></td>
      </tr>
*/

// set the onclick of the button so it removes the table row from the table
// event.target

function addRow(event){

  const table = document.querySelector('#table');
  //const newRow = table.insertRow(1); // 1 - insert on index 1 (after index 0 which is header)
  const newRow = table.insertRow(table.rows.length-1); //insert on index table.rows.length-1 (before last row)
 //TODO: insert on index "-2" (using https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
  const newNameCell = newRow.insertCell();
  const newName = document.createTextNode(document.querySelector('#name').value);  
  newNameCell.appendChild(newName);

  const newSurnameCell = newRow.insertCell(1);
  const newSurname = document.createTextNode(document.querySelector('#surname').value);  
  newSurnameCell.appendChild(newSurname);

  const newAgeCell = newRow.insertCell();
  const newAge = document.createTextNode(document.querySelector('#age').value);  
  newAgeCell.appendChild(newAge);

  const newRemoveCell = newRow.insertCell();

  let removeButtonElement = document.createElement('input');

  removeButtonElement.type = 'button';
  removeButtonElement.value = 'remove';
    
  newRemoveCell.appendChild(removeButtonElement);

  removeButtonElement.onclick = removeRow;  
  
}

function removeRow(event){
  console.log(event.target.parentNode);
  event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);

}

const createButtonElement = document.querySelector('#commit');
console.log(createButtonElement);
createButtonElement.onclick = addRow;