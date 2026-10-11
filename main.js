// --- ANSWERS OF THE QUIZ ---
console.log("Q1 Answer: B. 10");
console.log("Q2 Answer: A. undefined");
console.log("Q3 Answer: D. error");
console.log("Q4 Answer: D. error");
console.log("Q5 Answer: B. 'Hello'");
console.log("Q6 Answer: A. undefined");
console.log("Q7 Answer: A. undefined - 2");
console.log("Q8 Answer: A. 30 - 20 - 10");
console.log("Q9 Answer: D. 10 - error");

// --- USER CRUD APPLICATION ---
const users = [];

function createUser() {
    const userNameInput = prompt("Enter username:");
    const passwordInput = prompt("Enter password:");

    const user = {
        username: userNameInput,
        password: passwordInput
    };

    users.push(user);
    showUsers();
}

function showUsers() {
    console.clear();
    for (let i = 0; i < users.length; i++) {
        console.log(`${i + 1}- Username: ${users[i].username} => Password: ${users[i].password}`);
    }
}

function updateUser() {
    const itemIndex = prompt("Enter User Number to update:") - 1;
    
    const newUsername = prompt("Enter new username:");
    const newPassword = prompt("Enter new password:");

    const updatedUser = {
        username: newUsername,
        password: newPassword
    };

    users.splice(itemIndex, 1, updatedUser);
    showUsers();
}

function deleteUser() {
    const itemIndex = prompt("Enter User Number to delete:") - 1;
    
    users.splice(itemIndex, 1);
    showUsers();
}