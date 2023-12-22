import "./Puzzle.css"
import { Tiles } from "./Tiles"

export default function Puzzle() {
    return (

        <div className="row d-flex text-center">
            <div className="card bg-dark d-inline">
                <img className="m-2" src={Tiles[0]} alt="" />
                <img className="m-2" src={Tiles[1]} alt="" />
                <img className="m-2" src={Tiles[2]} alt="" />
                <img className="m-2" src={Tiles[3]} alt="" />
                <img className="m-2" src={Tiles[4]} alt="" />
                <img className="m-2" src={Tiles[5]} alt="" />
                <img className="m-2" src={Tiles[6]} alt="" />
                <img className="m-2" src={Tiles[7]} alt="" />
                <img className="m-2" src={Tiles[8]} alt="" />
            </div>
        </div>

    )
}