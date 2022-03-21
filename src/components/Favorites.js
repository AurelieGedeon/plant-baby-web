import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favorites({ isFavorite, id, setPlantList, user }) {
  const [toggleFavorite, setToggleFavorite] = useState(true);
  const [favoritesList, setFavoritesList] = useState();

  const handleToggleFavorites = () => {
    setToggleFavorite(!toggleFavorite);
    fetch(`https://plant-baby-ag.uc.r.appspot.com/users/${user.uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: toggleFavorite, plantId: id }),
    })
      .then(() => {
        fetch(`https://plant-baby-ag.uc.r.appspot.com/users/${user.uid}/plants`)
          .then((res) => res.json())
          .then((data) => {
            setPlantList(data.isFavorite);
          })
          .catch(alert);
      })
      .catch(alert);
  };
  return (
    <>
      {!isFavorite ? (
        <FavoriteBorderIcon
          onClick={() => {
            handleToggleFavorites();
          }}
          className="favorite-icon"
        />
      ) : (
        <FavoriteIcon
          onClick={() => {
            handleToggleFavorites();
          }}
          className="filled-favorite-icon"
          sx={{ fill: "red" }}
        />
      )}
    </>
  );
}
