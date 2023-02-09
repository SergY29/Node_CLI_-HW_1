const fs = require('fs').promises;
const path = require('path');



const contactsPath = path.resolve('./db/contacts.json')
// console.log(contactsPath)


const listContacts = async () => {
    const dataString = await fs.readFile(contactsPath, 'utf8');
    const data = JSON.parse(dataString);
    return data;
    // return console.log(data);
}




const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.filter(contact => contact.id === String(contactId));
    // return contact;
    return console.log(contact);
}

function removeContact(contactId) {
    // ...твой код
}

function addContact(name, email, phone) {
    // ...твой код
}



// console.log(listContacts())
console.log(getContactById(6))


module.exports = {
    listContacts,
    getContactById

}

