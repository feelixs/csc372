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

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}

let backwardsStr = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    backwardsStr += hacker2[i]
}

console.log(backwardsStr)
