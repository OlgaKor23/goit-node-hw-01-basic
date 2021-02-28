const fs = require('fs');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
    // ...твой код
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if (err) {
            return console.error(err.message);
        }
        const contacts = JSON.parse(data);

        console.log('List of contacts: ');
        console.table(contacts);
    });
}

function getContactById(contactId) {
    // ...твой код
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if(err) {
            return console.log(err);
        }

        const contacts = JSON.parse(data);

        const contact = contacts.find(contact => {
            if(contact.id === contact.id) {
                console.log(`get contact by ID ${contactId}:`);
                console.table(contact);
                return contact;
            }
        });

        if (contact == null) {
            console.log(`Contact with ID "${contactId}" not found!`);
        }
    })
}

function removeContact(contactId) {
    // ...твой код
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if(err) {
            return console.log(err);
        }

        const contacts = JSON.parse(data);
        const newContact = contacts.filter(contact => contact.id !== contactId);

        if(newContact.length === contacts.length) {
            console.log(
                `Contact with ID "${contactId}" don't removed! ID "${contactId}" not found!`,
            );
            return;
        }
    })
}

function addContact(name, email, phone) {
    // ...твой код
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if(err) {
            return console.log(err);
        }

        const contacts = JSON.parse(data);
        contacts.push({
            id: contacts.length + 1,
            name: name,
            email: email,
            phone: phone,
        })

        console.log('Contacts added successfully! New lists of contacts: ');
        console.table(contacts);

        fs.writeFile(contactsPath, JSON.stringify(contacts), error => {
            if (error) {
                return console.log(error);
            }
        });
    })
}


