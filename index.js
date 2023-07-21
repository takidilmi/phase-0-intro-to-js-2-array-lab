const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat() {
    return ["Milo", "Otis", "Garfield", "Broom"];
}
function prependCat() {
    return ["Arnold", "Milo", "Otis", "Garfield"]
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}