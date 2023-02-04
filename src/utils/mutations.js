import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { db } from "./firebase";

// Functions for database mutations

export const emptyEntry = {
  name: "",
  link: "",
  description: "",
  user: "",
  category: 0,
  imageUrl: "",
};

export async function addEntry(entry) {
  await addDoc(collection(db, "entries"), {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    user: entry.user,
    category: entry.category,
    imageUrl: "",
    // The ID of the current user is logged with the new entry for database user-access functionality.
    // You should not remove this userid property, otherwise your logged entries will not display.
    userid: entry.userid,
  });
}

// Added ID argument to use entry's generated ID for updateDoc
export async function updateEntry(id, entry) {
  // Mutation to Edit Entry

  // Reference to entry
  const entryToUpdate = doc(db, "entries", id);
  await updateDoc(entryToUpdate, {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    category: entry.category,
    imageUrl: entry.imageUrl,
  });
}

export async function deleteEntry(id) {
  // Create Mutation to Delete Entry

  const entryToDelete = doc(db, "entries", id);
  await deleteDoc(entryToDelete);
}
