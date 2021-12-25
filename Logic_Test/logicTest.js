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
    let wadah = data.split(' ')
    let hasil = []
    for (let i in wadah) {
        hasil[i] = wadah[i].split("").reverse().join("")
    }
    console.log(hasil.join(" "))
}

// Nearest Fibonacci
const nearestFibonacci = ([...data]) => {
    let first = 0, second = 1
    let third = first + second

    while(third <= data.length) {
        first = second
        second = third
        third = first + second
    }

    let ans = (Math.abs(third - data.length) >= Math.abs(second - data.length) ? second : third)
    console.log(ans)
}

// FizzBuzz
const fizzBuzz = (data) => {
    let sum = []
    for (let i = 1; i <= data; i++) {
        sum.push(i)
    }
    for (let x in sum) {
        if (sum[x] % 5 === 0 && sum[x] % 3 === 0) {
            console.log("FizzBuzz")
            continue
        } else if (sum[x] % 5 === 0) {
            console.log("Buzz")
            continue
        } else if (sum[x] % 3 === 0) {
            console.log("Fizz")
            continue
        }
        console.log(String(sum[x]))
    }
}


// Main Input
// Palindrome(`Balonku ada lima`)

// leapYear(1900, 2020)

// reverseWords("I am A Great human")

// nearestFibonacci([15,1,3])

fizzBuzz(15)