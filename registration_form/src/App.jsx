// # Exercise Requirement: User Registration Form

// - You are tasked with creating a user registration form using React functional components and the useState hook. The form should collect the following information from the user: fullName, email, password

// ## Requirements:

// - Create a functional component called RegistrationForm.
// - Inside the RegistrationForm component, use the useState hook to manage the state of the form fields (full name, email, and password).
// - Display the form fields and provide an input field for each piece of information.
// - Include appropriate labels for each input field.
// - When the user types in any of the input fields, update the state accordingly using the useState hook.
// - Create a submit button to process the form.
// - Create one more state property: registeredUsers that initially is empty array.
// - On form submission, save the "created user" in the registeredUsers array.
// - Create one more functional component "UsersRegistered"
// - Provide the registeredUsers state in the component "UsersRegistered" and display them on the screen.
// - In the component "UsersRegistered" make one more button called: Remove Users
// - When Remove Users is clicked should remove all the users from the list.



import React, { useState } from 'react'
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import { data } from "./components/Data/Data"
import UsersRegistered from "./components/UsersRegistered/UsersRegistered"

function App() {
  const [users, setUsers] = useState(data);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser])
  };

  const handleDeleteUser = (id) => {
    if (users.length === 0) {
      alert("There are no users");
      return
    };

    const deletedUsers = users.filter((user) => user.id !== id);

    setUsers(deletedUsers);
  };

  const handleDeleteAllUsers = () => {
    // for (let i = 0; i < registeredUsers.length; i++) {
    //   const user = registeredUsers[i];
    //   handleDeleteUser(user.id);
    // }

    setUsers([]);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <h3>Please fill out this form in order to register</h3>
      <RegistrationForm handleAddUser={handleAddUser} />
      <h2>Registered Users</h2>
      <UsersRegistered
        registeredUsers={users} // MORA users DA SE STAVI (dinamichno se menuva) namesto static nizata (data)
        handleDeleteUser={handleDeleteUser}
        handleDeleteAllUsers={handleDeleteAllUsers}
      />
    </>
  )
}

export default App
