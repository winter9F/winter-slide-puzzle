export const canMoveTile = ({ index, emptyTileIndex }) => {
    const emptyRowIndex = Math.floor(emptyTileIndex / 3);
    const emptyColIndex = emptyTileIndex % 3;
    const clickedRowIndex = Math.floor(index / 3);
    const clickedColIndex = index % 3;

    const isAdjacent =
        (emptyRowIndex === clickedRowIndex && Math.abs(emptyColIndex - clickedColIndex) === 1) ||
        (emptyColIndex === clickedColIndex && Math.abs(emptyRowIndex - clickedRowIndex) === 1)


    return isAdjacent;
}