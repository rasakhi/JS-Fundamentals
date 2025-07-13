const numOfArgs = process.argv.slice(2).length

if (numOfArgs === 0) {
    console.log("No argument");
} else if (numOfArgs === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}