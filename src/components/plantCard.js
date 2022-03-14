import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PlantCard({ name, image, id }) {
  let navigate = useNavigate();
  const handlePlantInfo = () => {
    navigate(`/plants/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handlePlantInfo}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="success" aria-label="add">
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
