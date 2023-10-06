interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// Statically use Student type for the objects
const student1: Student = {
    firstName: 'Francis',
    lastName: 'Anane',
    age: 100,
    location: 'Kumasi'
}

const student2: Student = {
    firstName: 'Nana',
    lastName: 'Kwame',
    age: 150,
    location: 'Accra'
}

const studentsList: Array<Student> = [ student1, student2 ];

// Rendering html table with DOM
const table = document.createElement('table'); // // the parent that contains all the elements defined for a table
const tableHeader = document.createElement('thead');  // Within this is table row elements
const tableRow = document.createElement('tr'); // creates a row inside a table
const firstNameHeaderCell = document.createElement('th'); // column field in the row for the firstName
firstNameHeaderCell.textContent = 'First Name  ';
const locationHeaderCell = document.createElement('th'); // column field in the row for the location
locationHeaderCell.textContent = 'Location';


// Attaching elenments to their respective parents nodes
tableRow.appendChild(firstNameHeaderCell);
tableRow.appendChild(locationHeaderCell);
tableHeader.appendChild(tableRow);

const tableBody = document.createElement('tbody') // the table body element to hold the data to be populated on the table

studentsList.forEach((student) => {
    const row = document.createElement('tr'); // table row for the data to be populated 
    const firstNameCell = document.createElement('td'); // firstName table data cell field
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td'); // location table data cell field
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);  // Add data to the table row
    row.appendChild(locationCell)

    tableBody.appendChild(row);  // Add row to the table body
    
})
table.appendChild(tableHeader); // The head of the table element
table.appendChild(tableBody) // Body of the table element

table.style.borderCollapse = 'separate'; // ensures spacing works for children
table.style.borderSpacing = '10px' // Adding spacing between table cells

document.body.appendChild(table); // Attach the table to the parent node, the html body element






