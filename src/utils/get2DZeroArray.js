export function get2DZeroArray( numOfRows, numOfColumns) {

    let outerArray = [];
    for ( let i = 0; i < numOfRows; i++ ) {
        let innerArray = new Array(numOfColumns);
        innerArray.fill(0);
        outerArray.push(innerArray);
    }
    return outerArray;
}