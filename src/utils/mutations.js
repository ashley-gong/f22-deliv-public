import { doc, addDoc, updateDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

// Functions for database mutations

export const emptyEntry = {
  name: "",
  link: "",
  description: "",
  user: "",
  category: 0,
};

export async function addEntry(entry) {
  await addDoc(collection(db, "entries"), {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    user: entry.user,
    category: entry.category,
    // The ID of the current user is logged with the new entry for database user-access functionality.
    // You should not remove this userid property, otherwise your logged entries will not display.
    userid: entry.userid,
  });
}

// entry should refer to id of user?
export async function updateEntry(entry) {
  // TODO: Create Mutation to Edit Entry

  // Reference to entry
  const entryToUpdate = doc(db, "entries", entry);
  await updateDoc(entryToUpdate, {
    name: "hi",
    link: entry.link,
    description: entry.description,
    category: entry.category,
  });
}

export async function deleteEntry(entry) {
  // TODO: Create Mutation to Delete Entry
}
