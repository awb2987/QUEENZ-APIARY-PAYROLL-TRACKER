# QUEENZ APIARY PAYROLL TRACKER

## Overview

The Employee Payroll Tracker is a tool designed to help users manage and track employee payroll information. Users can add employee details, and the tool provides functionality to display and sort this information, as well as compute aggregated data.

## Features

- Add employee information including first name, last name, and salary.
- Continue adding employees or cancel to see a summary.
- Display employee data sorted alphabetically by last name.
- Compute and display aggregated data such as average salary and the number of employees.

## Acceptance Criteria

- **Given** an employee payroll tracker
  - **When** you click the "Add employee" button
    - **Then** you are presented with prompts for first name, last name, and salary.
  - **When** you finish adding an employee
    - **Then** you are prompted to either continue or cancel.
  - **When** you choose to continue
    - **Then** you are prompted to add a new employee.
  - **When** you choose to cancel
    - **Then** your employee data is displayed sorted alphabetically by last name, and the console shows computed and aggregated data.

## Variables

- **First name**
- **Last name**
- **Salary**

## Outputs

- **Last name**
- **First name**
- **Salary**
- **Average salary**
- **Number of employees listed**

## Purpose

The purpose of this app is to provide users with a straightforward way to log and manage employee payroll data. It helps in keeping track of individual employee details and provides aggregate data for better payroll management.

## Notes

- The average salary and random employee's name could not be included in the table due to limitations with the Starter Code.
- Additional notes have been added to this document as suggested. Future README files will continue to include more detailed notes and explanations.

## Usage

1. Click the "Add employee" button to start adding employee details.
2. Follow the prompts to enter first name, last name, and salary.
3. After entering employee details, choose whether to continue adding more employees or cancel.
4. If you choose to cancel, view the sorted employee data and aggregated statistics on the page.

## Future Improvements

- Include the average salary and random employee's name in the data table.
- Enhance documentation and commit practices as per feedback and best practices.

## Acknowledgements

Thank you for the feedback and advice provided on previous assignments. This has been taken into account to improve documentation and development practices.

## Screenshot

![Queenz-Apiary-Payroll-Tracker top of page](./assets/images/Screenshot%20of%20the%20top%20of%20the%20web%20app.png)
![Queenz-Apiary-Payroll-Tracker added functionality](./assets/images/Screenshot%20of%20added%20functionality.png)
*Screenshot of the Employee Payroll Tracker in action.*
