import { puzzlePieces } from "./puzzlePieces";

const tilesEdit = [...puzzlePieces]
const solution = [...puzzlePieces]

let puzzle = [];

while (tilesEdit.length) {
    const indexNum = Math.floor(Math.random() * tilesEdit.length);
    puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
};

let emptyTileIndex = puzzle.indexOf("/src/assets/PuzzlePieces/P1-9-blank.jpg");
export { puzzle, solution, emptyTileIndex }