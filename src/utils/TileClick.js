export const handleTileClick = ({ index, newPuzzle, emptyTileIndex, setPuzzle, setEmptyTileIndex, canMoveTile }) => {
    if (canMoveTile({ index, emptyTileIndex })) {
        const updatedPuzzle = [...newPuzzle];
        [updatedPuzzle[index], updatedPuzzle[emptyTileIndex]] = [updatedPuzzle[emptyTileIndex], updatedPuzzle[index]];


        let newEmptyTileIndex = -1

        if (updatedPuzzle.includes("/src/assets/PuzzlePieces1/P1-9-blank.jpg")) {
            newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces2/P1-9-blank.jpg")
        } else if (updatedPuzzle.includes("/src/assets/PuzzlePieces2/P2-9-blank.jpg")) {
            newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces3/P2-9-blank.jpg")
        } else {
            newEmptyTileIndex = updatedPuzzle.indexOf("/src/assets/PuzzlePieces3/P3-9-blank.jpg")
        }
        console.log("EmptyTileIndex:", newEmptyTileIndex)
        setPuzzle(updatedPuzzle);
        setEmptyTileIndex(newEmptyTileIndex);


    }
};




