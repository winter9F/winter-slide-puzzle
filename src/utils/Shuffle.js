import { blankTile1, blankTile2, blankTile3 } from "./Puzzle/puzzle";

export const handleShuffle = ({ newPuzzle, setPuzzle, setEmptyTileIndex }) => {
    let currentPuzzle = [...newPuzzle];
    let updatedPuzzle = [];

    while (currentPuzzle.length) {
        const indexNum = Math.floor(Math.random() * currentPuzzle.length);
        updatedPuzzle.push(currentPuzzle.splice(indexNum, 1)[0]);
    };
    let newEmptyTileIndex = -1
    if (updatedPuzzle.includes(blankTile1)) {
        newEmptyTileIndex = updatedPuzzle.indexOf(blankTile1)
    } else if (updatedPuzzle.includes(blankTile2)) {
        newEmptyTileIndex = updatedPuzzle.indexOf(blankTile2)
    } else {
        newEmptyTileIndex = updatedPuzzle.indexOf(blankTile3)
    }
    setPuzzle(updatedPuzzle)
    setEmptyTileIndex(newEmptyTileIndex);
}