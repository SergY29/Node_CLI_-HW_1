const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const contactsPath = path.resolve('./db/contacts.json')

const listContacts = async () => {
    try {
        const dataString = await fs.readFile(contactsPath, 'utf8');
        const data = JSON.parse(dataString);
        return data;
    } catch (error) {
        console.log(error)
    }

}


const getContactById = async (contactId) => {
    try {
        const contacts = await listContacts();
        const contact = contacts.filter(contact => contact.id === String(contactId));
        return console.log(contact);
    } catch (error) {
        console.log(error)
    }

}

const removeContact = async (contactId) => {
    try {
        const contacts = await listContacts();
        const idx = contacts.findIndex(contact => contact.id === String(contactId));
        const deleteContact = contacts[idx];

        contacts.splice(idx, 1);
        await fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf8');
        return console.log(deleteContact);
    } catch (error) {
        console.log(error)
    }

}

const addContact = async (name, email, phone) => {
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
    };

    try {
        const contacts = await listContacts();
        const newListContacts = [...contacts, newContact];
        await fs.writeFile(contactsPath, JSON.stringify(newListContacts), 'utf8');
        return console.log(newContact)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

