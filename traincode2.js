const trainNetwork = {
    lineN: [
        "Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"
    ],
    lineL: [
        "1st",
        "3rd",
        "Union Square",
        "6th",
        "8th"
    ],
    lineSix: [
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place"
    ],
    lineA: [
        "A1",
        "A2",
        "3rd",
        "Deadend"
    ]
};

// finds train stations that are nodes
const nodeFinder = ( anyTrainSystem ) => {
    let nodeObject = {};
    for ( trainLine in anyTrainSystem ){
        for ( var i=0; i<anyTrainSystem[trainLine].length; i++ ){
            if (!Array.isArray(nodeObject[anyTrainSystem[trainLine][i]])){
                nodeObject[anyTrainSystem[trainLine][i]] = [];
            }
            nodeObject[anyTrainSystem[trainLine][i]].push(trainLine);
        }
    }
    return nodeObject;
}

console.log( nodeFinder(trainNetwork) );