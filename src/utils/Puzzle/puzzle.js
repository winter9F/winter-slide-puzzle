import { puzzlePieces1 } from "./puzzlePieces1";
import { puzzlePieces2 } from "./puzzlePieces2";
import { puzzlePieces3 } from "./puzzlePieces3";

export const blankTile1 = puzzlePieces1[8]
export const blankTile2 = puzzlePieces2[8]
export const blankTile3 = puzzlePieces3[8]




export const CreatePuzzle = (puzzleKey, { setPuzzle, setSolution, setEmptyTileIndex }) => {
    if (puzzleKey === "puzzle1") {
        const tilesEdit = [...puzzlePieces1]
        const solution = [...puzzlePieces1]

        let puzzle = [];

        while (tilesEdit.length) {
            const indexNum = Math.floor(Math.random() * tilesEdit.length);
            puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
        };

        let emptyTileIndex = puzzle.indexOf(blankTile1);
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

        let emptyTileIndex = puzzle.indexOf(blankTile2);
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

        let emptyTileIndex = puzzle.indexOf(blankTile3);
        setPuzzle(puzzle)
        setSolution(solution)
        setEmptyTileIndex(emptyTileIndex)

    }



}

