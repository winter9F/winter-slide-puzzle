import tile1 from "../../assets/PuzzlePieces/P1-1.jpg"
import tile2 from "../../assets/PuzzlePieces/P1-2.jpg"
import tile3 from "../../assets/PuzzlePieces/P1-3.jpg"
import tile4 from "../../assets/PuzzlePieces/P1-4.jpg"
import tile5 from "../../assets/PuzzlePieces/P1-5.jpg"
import tile6 from "../../assets/PuzzlePieces/P1-6.jpg"
import tile7 from "../../assets/PuzzlePieces/P1-7.jpg"
import tile8 from "../../assets/PuzzlePieces/P1-8.jpg"
import tile9 from "../../assets/PuzzlePieces/P1-9.jpg"


export const solution = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
const tilesEdit = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]


export const puzzle = []


while (tilesEdit.length) {
    const indexNum = Math.floor(Math.random() * tilesEdit.length);
    puzzle.push(tilesEdit.splice(indexNum, 1)[0]);
}

