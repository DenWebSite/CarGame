const trees = document.querySelectorAll('.tree');
const treesCoords = [];

for (let i = 0; i < trees.length; i++) {
    const tree = trees[i];
    const coordTree = getCoords(tree);

    treesCoords.push(coordTree);
}

function treesAnimation(speed) {
    for (let i = 0; i < trees.length; i++) {
        const tree = trees[i];
        const coords = treesCoords[i];

        let newYCoord = coords.y + speed;

        if (newYCoord > window.innerHeight) {
            newYCoord = -220;
        }

        treesCoords[i].y = newYCoord;
        tree.style.transform = `translate(${coords.x}px, ${newYCoord}px)`
    }
}