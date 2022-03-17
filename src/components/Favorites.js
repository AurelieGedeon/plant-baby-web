import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favorites({ isFavorite, id, setPlantList }) {
  const [toggleFavorite, setToggleFavorite] = useState(true);

  const handleToggleFavorites = () => {
    setToggleFavorite(!toggleFavorite);
    fetch(`http://localhost:3000/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: toggleFavorite }),
    })
      .then(() => {
        fetch("http://localhost:3000/plants")
          .then((res) => res.json())
          .then((data) => {
            setPlantList(data);
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
