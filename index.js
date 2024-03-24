// Code your solution here

//returns an array if the string argument matches
function findMatching(arr, name){
    function findName(n) {  
        return n.toUpperCase() === name.toUpperCase(); }

    return arr.filter(findName);
}

// console.log(findMatching(drivers,'bobby'))

//returns an array if the element begins with a specific letter
function fuzzyMatch(arr, begin){
    return arr.filter(word => word.startsWith(begin))
}
// console.log(fuzzyMatch(drivers,"Sa")) 

//finding object from array where the string argument matches the name key in the array
function matchName(arr, driver){
    return arr.filter(dname => dname.name === driver);
}

// console.log(matchName(drivers, "Bobby"));