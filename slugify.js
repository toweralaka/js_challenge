// Only change code below this line
function urlSlug(title) {
    let myVar = title.split(/\W/);
    console.log(myVar)
    let nextVar = myVar.filter(elem => elem.length >= 1);
    let aVar = nextVar.map(elem => elem.toLowerCase())
    return aVar.join('-')
}
// Only change code above this line
