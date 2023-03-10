
// client-list-business.js

import { getClientElement } from "./client-business";
import { getClients } from "./data-business"

export function printClientsAccounts() {
    const clients = getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
        const element = getClientElement(client);
        ul.appendChild(element);
    }
    document.getElementById("root").appendChild(ul);
}

