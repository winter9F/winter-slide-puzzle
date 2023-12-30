import { puzzlePieces1 } from "./puzzlePieces1";
import { puzzlePieces2 } from "./puzzlePieces2";
import { puzzlePieces3 } from "./puzzlePieces3";




export const CreatePuzzle = (puzzleKey, { setPuzzle, setSolution, setEmptyTileIndex }) => {
    if (puzzleKey === "puzzle1") {
        const tilesEdit = [...puzzlePieces1]
        const solution = [...puzzlePieces1]

        let puzzle = [];

        while (tilesEdit.length) {
            const indexNum = Math.floor(Math.random() * tilesEdit.length);
            puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
        };

        let emptyTileIndex = puzzle.indexOf("/winter-slide-puzzle/src/assets/PuzzlePieces1/P1-9-blank.jpg");
        setPuzzle(puzzle)
        setSolution(solution)
        setEmptyTileIndex(emptyTileIndex)

    } else if (puzzleKey === "puzzle2") {

        const tilesEdit = [...puzzlePieces2]
        const solution = [...puzzlePieces2]

        let puzzle = [];

        while (tilesEdit.length) {
            const indexNum = Math.floor(Math.random() * tilesEdit.length);
            puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
        };

        let emptyTileIndex = puzzle.indexOf("/winter-slide-puzzle/src/assets/PuzzlePieces2/P2-9-blank.jpg");
        setPuzzle(puzzle)
        setSolution(solution)
        setEmptyTileIndex(emptyTileIndex)

    } else if (puzzleKey === "puzzle3") {
        const tilesEdit = [...puzzlePieces3]
        const solution = [...puzzlePieces3]

        let puzzle = [];

        while (tilesEdit.length) {
            const indexNum = Math.floor(Math.random() * tilesEdit.length);
            puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
        };

        let emptyTileIndex = puzzle.indexOf("/winter-slide-puzzle/src/assets/PuzzlePieces3/P3-9-blank.jpg");
        setPuzzle(puzzle)
        setSolution(solution)
        setEmptyTileIndex(emptyTileIndex)

    }



}

