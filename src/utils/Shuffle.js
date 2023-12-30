export const handleShuffle = ({ newPuzzle, setPuzzle, setEmptyTileIndex }) => {
    let currentPuzzle = [...newPuzzle];
    let updatedPuzzle = [];

    while (currentPuzzle.length) {
        const indexNum = Math.floor(Math.random() * currentPuzzle.length);
        updatedPuzzle.push(currentPuzzle.splice(indexNum, 1)[0]);
    };
    let newEmptyTileIndex = -1
    if (updatedPuzzle.includes("/src/assets/PuzzlePieces1/P1-9-blank.jpg")) {
        newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces1/P1-9-blank.jpg")
    } else if (updatedPuzzle.includes("/src/assets/PuzzlePieces2/P2-9-blank.jpg")) {
        newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces2/P2-9-blank.jpg")
    } else {
        newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces3/P3-9-blank.jpg")
    }
    setPuzzle(updatedPuzzle)
    setEmptyTileIndex(newEmptyTileIndex);
}