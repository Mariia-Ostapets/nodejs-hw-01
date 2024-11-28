import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    contacts.length = 0;
    await writeContacts(contacts);
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
