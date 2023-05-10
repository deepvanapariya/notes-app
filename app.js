const c = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
yargs.version("1.1.0");

//add notes
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//remove notes
yargs.command({
  command: "remove",
  describe: "remove the note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.removeNote(argv.title);
  },
});
//list notes
yargs.command({
  command: "list",
  describe: "list the note",
  handler() {
    notes.listNotes();
  },
});
//read notes
yargs.command({
  command: "read",
  describe: "read the node",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();

