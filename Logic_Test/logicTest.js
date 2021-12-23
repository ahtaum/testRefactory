// LOGIC TEST

// Palindrome
const Palindrome = (data) => {
    const a = data.toLowerCase()
    const b = data.split("").reverse().join("").toLowerCase()
    if (a !== b) {
        console.log(`not palindrome`)
    } else {
        console.log(`palindrome`)
    }
}

// Leap Year
const leapYear = (x, y) => {
    for (x; x <= y; x += 4) {
        if (x % 2 === 0) {
            console.log(x)
        }
    }
}

// Reverse Words
const reverseWords = (data) => {
    let wadah = data.split(" ")
    for (let i in wadah) {
        console.log(wadah[i].substr(1) + wadah[i].charAt(0))
    }
}

// Main Input
// Palindrome(`Balonku ada lima`)

// leapYear(1900, 2020)

reverseWords("I am A Great human")