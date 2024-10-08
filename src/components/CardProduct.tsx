import { TProducts } from "../types/products";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
type IPropsCardProduct = TProducts;

const CardProduct = (product: IPropsCardProduct) => {
  const [srcImageIndex, setSrcImageIndex] = useState<number>(0);

  const handleImages = (index: number) => {
    setSrcImageIndex(srcImageIndex + index);
  };

  return (
    <Grid size={4} key={product.id}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          sx={{ height: "50vh", objectFit: "contain" }}
          image={product.images[srcImageIndex]}
          title="green iguana"
        />
        <CardContent>
          <Grid container>
            <Grid size={6} flexDirection="column" alignItems="flex-end">
              <Typography
                gutterBottom
                variant="body1"
                sx={{ fontWeight: "700" }}
              >
                {product.title}
              </Typography>
              <Box>
                <ArrowCircleLeftRoundedIcon
                  fontSize="large"
                  color={srcImageIndex > 0 ? "primary" : "disabled"}
                  cursor="pointer"
                  onClick={() => {
                    if (srcImageIndex > 0) {
                      handleImages(-1);
                    }
                  }}
                />
                <ArrowCircleRightRoundedIcon
                  fontSize="large"
                  color={
                    product.images.length - 1 > srcImageIndex
                      ? "primary"
                      : "disabled"
                  }
                  cursor="pointer"
                  onClick={() => {
                    if (product.images.length - 1 > srcImageIndex) {
                      handleImages(1);
                    }
                  }}
                />
              </Box>
            </Grid>
            <Grid
              container
              flexDirection="column"
              alignItems="flex-end"
              size={6}
            >
              <Typography
                gutterBottom
                variant="h5"
                color="primary"
                sx={{ fontWeight: "700" }}
              >
                $ {product.price}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                sx={{
                  fontWeight: "700",

                  textDecorationLine: "line-through",
                  opacity: "60%",
                }}
              >
                $ {product.price - 10}
              </Typography>{" "}
              <Button variant="contained" color="secondary">
                ¡Lo Quiero!
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default CardProduct;
