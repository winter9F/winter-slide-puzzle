export const handleTileClick = ({ index, newPuzzle, emptyTileIndex, setPuzzle, setEmptyTileIndex, canMoveTile }) => {
    if (canMoveTile({ index, emptyTileIndex })) {
        const updatedPuzzle = [...newPuzzle];
        [updatedPuzzle[index], updatedPuzzle[emptyTileIndex]] = [updatedPuzzle[emptyTileIndex], updatedPuzzle[index]];
        let newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces1/P1-9-blank.jpg");
        setPuzzle(updatedPuzzle);
        setEmptyTileIndex(newEmptyTileIndex);


    }
};




