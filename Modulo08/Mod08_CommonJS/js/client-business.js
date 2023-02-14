
// client-business.js

const ACCOUNT = require("./account-business");
const DATA = require("./data-business");

const getClientElement = function (client) {
    const allAccounts = DATA.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }
    const node = getClientNode(client);
    const ul = ACCOUNT.getClientAccountsElement(clientAccounts);
    node.appendChild(ul);
    return node;
}

function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
    return li;
}

function getFullName(client) {
    return client.first_name + " " + client.last_name;
}

module.exports = {
    getClientElement: getClientElement
};