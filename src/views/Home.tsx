import Grid from "@mui/material/Grid2";
import { Box, Fab } from "@mui/material";
import DropdownCategories from "../components/DropdownCategories";
import SearchProducts from "../components/SearchProducts";
import Products from "../components/Products";
import FieldsHandlePriceProduct from "../components/FieldsHandlePriceProduct";
import NavigationIcon from "@mui/icons-material/Navigation";

const Home = () => {
  return (
    <Box className="grow px-[2%] my-6" >
      <Grid container spacing={{ lg: 8, sm: 4, xs: 2 }}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }} spacing={3}>
          <DropdownCategories />
          <FieldsHandlePriceProduct />
        </Grid>
        <Grid size={"grow"}>
          <SearchProducts />
          <Products />
        </Grid>
      </Grid>
      <Fab
        variant="circular"
        color="primary"
        sx={{
          position: "fixed",
          right: "2%",
          bottom: "2%",
        }}
        size="small"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <NavigationIcon sx={{ fontSize: "1rem", m: "auto" }} />
      </Fab>
    </Box>
  );
};

export default Home;
