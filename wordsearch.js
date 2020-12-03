const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let newArray = []
    for (let x = 0; x < letters.length; x++) {
        newArray.push([])
    }
    for (let y = 0; y < letters.length; y++) {
        for (let x = 0; x < letters[y].length; x++) {
            newArray[x][y] = letters[y][x];
        }
    }
    const verticalJoin = newArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = wordSearch



