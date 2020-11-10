const users = ["mari", 'adiran', 'gabe', 'dom'];

for (let i = 0; i < users.length; i++) {
    console.log(`Hello ${users[i]}`);
}

const speak = (name) => {
    console.log(`Hello, ${name}`);
}

speak(users[0]);
speak('New User');