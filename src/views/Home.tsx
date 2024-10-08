import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import DropdownCategories from "../components/DropdownCategories";
import SearchProducts from "../components/SearchProducts";
import Products from "../components/Products";

const Home = () => {
  return (
    <Box className="grow px-[2%] my-6">
      <Grid container spacing={{ lg: 8, sm: 4, xs: 2 }}>
        <Grid size={{ sm: 4, lg: 3 }}>
          <DropdownCategories />
        </Grid>
        <Grid size={"grow"}>
          <SearchProducts />
          <Products />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
