export const handleShuffle = ({ newPuzzle, setPuzzle, setEmptyTileIndex }) => {
    let currentPuzzle = [...newPuzzle];
    let updatedPuzzle = [];

    while (currentPuzzle.length) {
        const indexNum = Math.floor(Math.random() * currentPuzzle.length);
        updatedPuzzle.push(currentPuzzle.splice(indexNum, 1)[0]);
    };
    let newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces1/P1-9-blank.jpg");
    setPuzzle(updatedPuzzle);
    setEmptyTileIndex(newEmptyTileIndex);
}