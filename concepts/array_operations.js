const arr = [1,2,3,4,5,6]

const newArr = arr.map(function(item){
    return item *2
})
console.log(newArr)

const newArr2 = arr.map(function(item, index){
    return item * index
})
console.log(newArr2)

const sum = arr.reduce(function(total, next){
    return total + next
})
console.log(sum)

const filter = arr.filter(function(item){
    return item % 2 === 0
})
console.log(filter)

const find = arr.find(function(item){
    return item === 4
})
console.log(find)