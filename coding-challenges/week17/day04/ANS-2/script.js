function reverseString(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    };

    return newString;
};

const string = prompt('Enter a string : ');

switch (reverseString(string)) {
    case string:
        console.log(`${string} is a Palindrome`);
        alert(`${string} is a Palindrome`);
        break;
    
    default:
        console.log(`${string} is not a Palindrome`);
        alert(`${string} is a not Palindrome`);
};
