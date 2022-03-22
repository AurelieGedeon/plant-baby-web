import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";

import Favorites from "./Favorites";

export default function PlantCard({
  name,
  image,
  id,
  isFavorite,
  setPlantList,
  user,
}) {
  let navigate = useNavigate();
  const handlePlantInfo = () => {
    navigate(`/plants/${id}`);
  };
  return (
    <Card sx={{ width: 290 }}>
      <CardActionArea onClick={handlePlantInfo}>
        <CardMedia component="img" height="300" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Favorites isFavorite={isFavorite} id={id} user={user} />
      </CardActions>
    </Card>
  );
}
