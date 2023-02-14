
// client-list-business.js

const CLIENT = require("./client-business");
const DATA = require("./data-business");

const printClientsAccounts = function () {
    const clients = DATA.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
        const element = CLIENT.getClientElement(client);
        ul.appendChild(element);
    }
    document.getElementById("root").appendChild(ul);
}

module.exports = {
    printClientsAccounts: printClientsAccounts
};