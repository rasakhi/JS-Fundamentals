// convert first argument to integer
const num = parseInt(process.argv[2]);

if (isNaN(num)) {
    console.log("Missing number of occurences");
} else {
    i = 0;
    while (i < num) {
        console.log("C is fun");
        i++;
    }
}