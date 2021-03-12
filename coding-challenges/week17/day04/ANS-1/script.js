const entry = Number(prompt("Enter a number : "));

if (isNaN(entry)) {
    console.log("Incorrect Input");
    alert("Incorrect Input");

} else {
    for (let i = 2; i < entry; i++) {
        if (entry % i == 0) {
            console.log(`${entry} is not a Prime Number`);
            alert(`${entry} is not a Prime Number`);
            break;
        };

        if (i == entry - 1) {
            console.log(`${entry} is a Prime Number`);
            alert(`${entry} is a Prime Number`);
        };
    };
};

