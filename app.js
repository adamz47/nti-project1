const yargs = require("yargs");
const notes = require("./notes");
/////////////////////////////////////////////////
yargs.command({
  command: "add",
  describe: "adding new student",
  builder: {
    id: {
      describe: "student id",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "student name",
      demandOption: true,
      type: "string",
    },
    grade: {
      describe: "student grades",
      demandOption: true,
      type: "array",
    },
  },
  handler: (a) => {
    notes.addStudent(a.id, a.name, a.grade);
  },
});
///////////////////////////////////////////////////
yargs.command({
  command: "read",
  describe: "aread student details",
  builder: {
    id: {
      describe: "student id",
      demandOption: true,
      type: "number",
    },
  },
  handler: (b) => {
    // console.log(b.id);
    notes.readData(b.id);
  },
});
///////////////////////////////////////////////////
yargs.command({
  command: "delete",
  describe: "delete current student",
  builder: {
    id: {
      describe: "student id",
      demandOption: true,
      type: "number",
    },
  },
  handler: (d) => {
    notes.deleteDetails(d.id);
  },
});
///////////////////////////////////////////////
yargs.command({
  command: "list",
  describe: "list all details",
  handler: (c) => {
    notes.listDetails();
  },
});
/////////////////////////////////////////////
yargs.parse();
