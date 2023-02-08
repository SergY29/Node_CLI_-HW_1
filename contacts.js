const fs = require('fs').promises;
const path = require('path');


const contactsPath = path.resolve('contacts.json')
console.log(contactsPath)

function listContacts() {
    fs.readFile('./db/contacts.json', 'utf-8')
}

function getContactById(contactId) {
    // ...твой код
}

function removeContact(contactId) {
    // ...твой код
}

function addContact(name, email, phone) {
    // ...твой код
}

console.log(listContacts())

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

