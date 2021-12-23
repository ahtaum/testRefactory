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
    if (x % 2 === 0 && y % 2 === 0) {
        
        for (x; x <= y; x++) {
            console.log(x)
        }

    } else {
        console.log(`Ganjil`)
    }
}

// Main Input
Palindrome(`Balonku ada lima`)
leapYear(1900, 2020)