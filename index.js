const argv = require("yargs").argv;
const { listContacts, getContactById, removeContact, addContact } = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const data = await listContacts();
            console.log(data);
            break;

        case "get":
            // ... id
            break;

        case "add":
            // ... name email phone
            break;

        case "remove":
            // ... id
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);



// console.log(listContacts())