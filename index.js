const argv = require("yargs").argv;
const { listContacts, getContactById, removeContact, addContact } = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            console.log(await listContacts());
            break;

        case "get":
            await getContactById(id);
            break;

        case "add":
            await addContact(name, email, phone);
            break;

        case "remove":
            await removeContact(id);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);

