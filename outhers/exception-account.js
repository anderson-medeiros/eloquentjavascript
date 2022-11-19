const accounts = {
    a: 100,
    b: 0,
    c: 20
}

function getAccount(accountName) {
    if(!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}


function transfer(from, to) {
    if(getAccount(from) && getAccount(to)) {
        return function(amount) {
            if(accounts[from] < amount) return;
            accounts[from] -= amount;
            accounts[to] += amount;
        }
    }
}


console.log(accounts);
const bankOperation = transfer('a', 'b');

bankOperation(10);
console.log(accounts);


