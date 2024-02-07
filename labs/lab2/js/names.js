var hacker1 = "Michael"
var hacker2 = "Connor"


console.log(`My name is ${hacker1}`)
console.log(`My partner's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log(`I have the longest name, it has ${hacker1.length} characters!`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that my partner has the longest name, it has ${hacker2.length} characters!`)
} else {
    console.log(`Wow, we both have equally long names, ${hacker2.length} characters!`)
}
