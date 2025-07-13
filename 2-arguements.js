const numOfArgs = process.argv.slice(2).length

if (numOfArgs === 0) {
    console.log("No arguement");
} else if (numOfArgs === 1) {
    console.log("Arguement found");
} else {
    console.log("Arguements found");
}