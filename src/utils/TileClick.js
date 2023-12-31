import { blankTile1, blankTile2, blankTile3 } from "./Puzzle/puzzle";

export const handleTileClick = ({ index, newPuzzle, emptyTileIndex, setPuzzle, setEmptyTileIndex, canMoveTile }) => {
    if (canMoveTile({ index, emptyTileIndex })) {
        const updatedPuzzle = [...newPuzzle];
        [updatedPuzzle[index], updatedPuzzle[emptyTileIndex]] = [updatedPuzzle[emptyTileIndex], updatedPuzzle[index]];


        let newEmptyTileIndex = -1

        if (updatedPuzzle.includes(blankTile1)) {
            newEmptyTileIndex = updatedPuzzle.indexOf(blankTile1)
        } else if (updatedPuzzle.includes(blankTile2)) {
            newEmptyTileIndex = updatedPuzzle.indexOf(blankTile2)
        } else {
            newEmptyTileIndex = updatedPuzzle.indexOf(blankTile3)
        }

        setPuzzle(updatedPuzzle);
        setEmptyTileIndex(newEmptyTileIndex);


    }
};




