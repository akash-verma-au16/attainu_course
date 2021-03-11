function table(num, length) {
    for (let i = 1; i <= length; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
};

var num = prompt("Enter the number for which you need table : ");

var confirm = confirm("DO you want to give the limit");

if (confirm) {
    var length = prompt("Enter the length till which you want the table : ");
} else {
    var length = 10;
};

table(num, length);