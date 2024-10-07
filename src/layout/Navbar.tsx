import { AppBar, Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MacroPayLogo from "../assets/navbar/logo-macro-pay.svg";

const Navbar = () => {
  return (
    <AppBar position="static" className="p-4 flex flex-row justify-between ">
      <img src={MacroPayLogo} alt="logo" className="w-full max-w-52" />
      <Box className="flex gap-3 items-center pr-[12%]">
        <Button variant="contained" color="secondary" className="text-blue-700">
          Crea Tu Cuenta
        </Button>
        <Button color="secondary">Iniciar Sesión</Button>
        <ShoppingCartOutlinedIcon
          color="primary"
          className="bg-white p-1 rounded-full w-7 h-7 cursor-pointer hover:opacity-70 transition"
        />
      </Box>
      <Box className="rotate-45 fixed flex flex-col items-center justify-end -right-[4%] -top-[10%] p-[2%] h-[14vw] w-[14vw] rounded-full bg-gradient-to-tl to-yellow-300 from-yellow-500 transition cursor-pointer hover:shadow-lg hover:shadow-yellow-500">
        <Typography className="text-[100%]">COMPRA A</Typography>
        <Typography className="text-[140%]">CRÉDITO</Typography>
      </Box>
    </AppBar>
  );
};

export default Navbar;
