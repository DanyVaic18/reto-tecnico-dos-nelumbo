import { TProducts } from "../types/products";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import ButtonsImagesCardProducts from "./ButtonsImagesCardProducts";

type IPropsCardProduct = TProducts;

const CardProduct = (product: IPropsCardProduct) => {
  const [srcImageIndex, setSrcImageIndex] = useState<number>(0);

  const handleImages = (index: number) => {
    setSrcImageIndex(srcImageIndex + index);
  };
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id}>
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
              <ButtonsImagesCardProducts
                images={product.images}
                handleImagesIndex={handleImages}
                imageIndex={srcImageIndex}
              />
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
                $ {product.price + 20}
              </Typography>{" "}
              <Button variant="contained" color="secondary">
                ¡Lo Quiero!
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardProduct;
