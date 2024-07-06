// Object
const shirt = {
    brand: "Oakley",
    colors: ["blue", "yellow"],
    sizes: ["P", "M", "G", "GG"],
    value: 59.60
}

const {brand, colors, sizes, value} = shirt

console.log(brand)
console.log(colors)
console.log(sizes)
console.log(value)


// Array
const letters = ["a", "b", "c", "d"]

const [first, second, ...rest] = letters

console.log(first)
console.log(second)
console.log(rest)