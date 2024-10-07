import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import DropdownCategories from "../components/DropdownCategories";

const Home = () => {
  return (
    <Box className="grow px-[4%] my-6">
      <Grid container spacing={3}>
        <Grid size={3}>
          <DropdownCategories />
        </Grid>
        <Grid size={"grow"}>hola</Grid>
      </Grid>
    </Box>
  );
};

export default Home;
