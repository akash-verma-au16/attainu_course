const entry = Number(prompt("Enter a positive integer : "));

if (isNaN(entry)) {
    console.log(`Incorrect Input`);
    alert(`Incorrect Input`);

} else {
    let sum = 0;
    let temp = (entry.toString()).split("");
    const digits = temp.length;

    for (let i in temp) {
        sum += Number(temp[i]) ** digits;
    };

    if (sum == entry) {
        console.log(`${entry} is an Armstrong number`);
        alert(`${entry} is an Armstrong number`);

    } else {
        console.log(`${entry} is not an Armstrong number.`);
        alert(`${entry} is not an Armstrong number.`);
    };
};