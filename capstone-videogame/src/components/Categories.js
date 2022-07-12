import React from "react";

const Categories = ({games}) => {
    return(
        <>
        <h3>Hey</h3>
        <div>
            {games?.sort((a, b) => a.rating > b.rating ? -1 : 1).map((game) => (
                <><div className="gameBorder">
                    <div>
                        <img src={game.background_image} alt={game.name} className="images"></img>
                    </div>
                    <div className="gameContent">
                        <h4 className="titleUnderline">{game.name}</h4>
                        <h6>Rating: {game.rating}</h6>
                        <h6>Released: {game.released}</h6>
                    </div>
                </div></>
            ))}
        </div>
        </>
    )
}

export default Categories;