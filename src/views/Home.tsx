import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import DropdownCategories from "../components/DropdownCategories";
import SearchProducts from "../components/SearchProducts";
import Products from "../components/Products";

const Home = () => {
  return (
    <Box className="grow px-[4%] my-6">
      <Grid container spacing={3}>
        <Grid size={3}>
          <DropdownCategories />
        </Grid>
        <Grid size={"grow"}>
          <SearchProducts />
          <Products></Products>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
