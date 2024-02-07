const mom = {
    name: "Donna",
    age: 50,
    qualities: ["Dark hair", "Good cook", "Dog lover"]
}


console.log(mom.name)
console.log(`Age: ` + mom.age)
console.log("Qualities:")
for (let i = 0; i < mom.qualities.length; i++) {
    console.log(mom.qualities[i])
}

function partner(name, birthYear, hobbies) {
    this.name = name
    this.birthYear = birthYear
    this.hobbies = hobbies
    this.print = function () {
        let hobbiesText = ""
        let i = 0 // init i outside the for loop so we can use it afterwards as well
        for (i = 0; i < this.hobbies.length - 2; i++) {
            hobbiesText += this.hobbies[i] + ", "
        }
        hobbiesText += this.hobbies[i] + ", and " + this.hobbies[i + 1]
        let age = getAge(this)
        console.log("My partner, " + this.name + ", is " + age + " years old and loves " + hobbiesText + "!\n")
    }
    return this
}

function getAge(person) {
    let yr = new Date().getFullYear()
    return yr - person.birthYear
}

let guillermo = partner("Guillermo", 2001, ["Film", "Lacrosse", "Making websites", "Video games"])
guillermo.print()
