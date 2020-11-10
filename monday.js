// const users = ["mari", 'adiran', 'gabe', 'dom'];

// for (let i = 0; i < users.length; i++) {
//     console.log(`Hello ${users[i]}`);
// }

// const speak = (name) => {
//     console.log(`Hello, ${name}`);
// }

// speak(users[0]);
// speak('New User');

// const accounts = [{acctNum: 12345, balance: 50000}, {acctNum: 98765, balance: 15000} ];

// const adjust = (amount, acctNum) => {
//     for (let i = 0; i < accounts.length; i++) {
//         if (accounts[i].acctNum === acctNum) {
//             accounts[i].balance += amount;
//         }
//     }
// }

// adjust(5000, 12345);
// adjust(-500, 98765);
// console.log(accounts);

const accounts = [1500, 500];

const adjust = (amount, acctNum) => {
    if (accounts[acctNum] += amount > 0) {
        accounts[acctNum] += amount;
    } else {
        console.log(`Ya don't have enough money`);
    }
}

adjust(5000, 0);
adjust(-500, 1);
adjust(-50, 1);
adjust(150);

console.log(accounts);

// function expressions

const adjust2 = function(amount, acctNum) {
    account[acctNum] += amount;
}

adjust2(500, 1);




