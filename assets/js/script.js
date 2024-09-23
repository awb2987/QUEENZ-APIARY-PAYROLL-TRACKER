document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the #add-employees-btn element
  const addEmployeesBtn = document.querySelector('#add-employees-btn');

  // Set up an empty array for the employees to be stored
  const employees = [];

  // Collect employee data
  const collectEmployees = function() {
    let addMore = true; // State variable to control the flow

    while (addMore) {
      // Collect employee data
      const firstName = prompt("Please Enter employee's first name:");
      if (firstName === null) break; // If user cancels prompt, exit loop

      const lastName = prompt("Please Enter employee's last name:");
      if (lastName === null) break; // If user cancels prompt, exit loop

      const salary = parseFloat(prompt("Please Enter employee's salary:"));
      if (isNaN(salary)) continue; // Skip if salary input is invalid

      // Create an object to represent the employee
      const employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      };
      // Add the employee object to the array
      employees.push(employee);

      // Ask if the user wants to add another employee
      addMore = confirm("Would you like to add another employee?");
    }

    // Sort and display employee data
    employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
    displayAverageSalary(employees);
    displayEmployees(employees);
    displayRandomEmployee(employees);
  };

  // Calculate and display the average salary
  const displayAverageSalary = function(employeesArray) {
    let totalSalary = 0;
    for (const employee of employeesArray) {
      totalSalary += parseFloat(employee.salary);
    }
    const averageSalary = totalSalary / employeesArray.length;
    const averageSalaryEl = document.createElement("p");
    averageSalaryEl.textContent = `Average Salary: ${averageSalary.toFixed(2)}`;
    document.body.appendChild(averageSalaryEl);
  };

  // Select a random employee using Math.random
  const getRandomEmployee = function(employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    return employeesArray[randomIndex];
  };

  const displayRandomEmployee = function(employeesArray) {
    const randomEmployee = getRandomEmployee(employeesArray);
    const randomEmployeeEl = document.createElement("p");
    randomEmployeeEl.textContent = `Random Employee: ${randomEmployee.lastName} ${randomEmployee.firstName}`;
    document.body.appendChild(randomEmployeeEl);
  };

  // Event listener for the button
  addEmployeesBtn.addEventListener('click', collectEmployees);
});

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
