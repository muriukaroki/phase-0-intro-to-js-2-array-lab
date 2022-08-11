// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] ;

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat (name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat (name){
    cats.shift(name)
}
function appendCat(name){
   const  copyCatsAppend = [...cats,name];
    return copyCatsAppend
}
function prependCat(name){
    const copyCatsPrepend = [name,...cats];
    return copyCatsPrepend
}
function removeLastCat (name) {
    const copyCatsLastCat = cats.slice(0,2);
    return copyCatsLastCat
}
function removeFirstCat(name){
    const copyCatsFirstCat = cats.slice(1);
    return copyCatsFirstCat
}