const fs = require("fs");

/* ading new data */
const addStudent = (id, stName, grade) => {
  const notes = loadNotes();
  const duplicate = notes.filter((each) => {
    return each.id === id;
  });
  console.log(duplicate);
  if (duplicate.length == 0) {
    let total = 0;
    grade.forEach((el) => {
      total = el + total;
    });
    notes.push({
      id,
      stName,
      grade,
      total,
    });
    saveNotes(notes);
    console.log("student data has been added successfully");
  } else {
    console.log("student data is already exsist");
  }
};
////////////////////////////////////////////////////////////
/* deleting data */
const deleteDetails = (id) => {
  const notes = loadNotes();
  const availableData = notes.filter((note) => {
    return note.id !== id;
  });
  if (notes.length == 0) {
    console.log("student id is not exsist");
  } else {
    console.log(availableData);
    saveNotes(availableData);
    console.log("student has been deleted");
  }
};
///////////////////////////////////////////////////////////
/* reading the data */
const readData = (id) => {
  const notes = loadNotes();
  const note = notes.find((note) => {
    return note.id === id;
  });
  if (note) {
    console.log(note);
  } else {
    console.log("id is not valid");
  }
};
///////////////////////////////////////////////////////////
/* list all the data */
const listDetails = () => {
  const data = loadNotes();
  data.forEach((el) => {
    console.log(el);
  });
};
//////////////////////////////////////////////////////////
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const saveData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", saveData);
};

module.exports = {
  addStudent,
  deleteDetails,
  readData,
  listDetails,
};
