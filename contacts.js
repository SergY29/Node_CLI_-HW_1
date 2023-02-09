const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const contactsPath = path.resolve('./db/contacts.json')


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

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id === String(contactId));
    const deleteContact = contacts[idx];

    contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf8');
    // return deleteContact;

    return console.log(deleteContact);
}

const addContact = async (name, email, phone) => {

    const contacts = await listContacts();
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
    };
    const newListContacts = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newListContacts), 'utf8');
    // return newContact;
    return console.log(newContact)
}



// console.log(listContacts())
// console.log(getContactById(2))
// console.log(removeContact(9))
// console.log(addContact('Igor', 'igor@mail.com', "(734) 598-34292"))


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

