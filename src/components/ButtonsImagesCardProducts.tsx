import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { Box } from "@mui/material";
import { MouseEvent } from "react";

interface IProps {
  images: string[];
  handleImagesIndex: (index: number) => void;
  imageIndex: number;
}
const ButtonsImagesCardProducts = ({
  images,
  handleImagesIndex,
  imageIndex,
}: IProps) => {
  const handleClick = (ev: MouseEvent<SVGSVGElement>) => {
    const id = ev.currentTarget.id;
    if (id === "prev") {
      if (imageIndex > 0) {
        handleImagesIndex(-1);
      }
    } else if (id === "next") {
      if (images.length - 1 > imageIndex) {
        handleImagesIndex(1);
      }
    }
  };

  return (
    <Box>
      <ArrowCircleLeftRoundedIcon
        fontSize="large"
        color={imageIndex > 0 ? "primary" : "disabled"}
        cursor="pointer"
        id="prev"
        onClick={handleClick}
      />
      <ArrowCircleRightRoundedIcon
        fontSize="large"
        color={images.length - 1 > imageIndex ? "primary" : "disabled"}
        cursor="pointer"
        id="next"
        onClick={handleClick}
      />
    </Box>
  );
};

export default ButtonsImagesCardProducts;
