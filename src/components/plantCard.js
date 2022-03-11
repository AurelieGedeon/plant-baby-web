import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

export default function PlantCard({ name, image, id }) {
  let navigate = useNavigate();
  const handlePlantInfo = () => {
    navigate(`/plants/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handlePlantInfo}>
      <CardActionArea>
        <CardMedia component="img" height="350" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
