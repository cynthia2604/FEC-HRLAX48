import React from "react";
import { useStateValue } from "./store/StateProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Snackbar from "@mui/material/Snackbar";

export default function Collection({ darkTheme, saved, setSaved, selected }) {
  const [star, setStar] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    checkOutfit();
  }, [selected, saved]);

  function checkOutfit() {
    for (let i = 0; i < saved.length; i++) {
      if (
        selected.productId === saved[i].productId &&
        selected.index === saved[i].index
      ) {
        setStar(true);
        return;
      }
    }
    setStar(false);
  }

  function handleOutfit() {
    if (star) {
      let removeOutfit = saved.filter(
        (product) =>
          product.productId !== selected.productId ||
          (product.productId === selected.productId &&
            product.index !== selected.index)
      );
      setSaved(removeOutfit);
    } else {
      let noDuplicateOutfits = saved.filter(
        (product) =>
          product.productId !== selected.productId ||
          (product.productId === selected.productId &&
            product.index !== selected.index)
      );
      setSaved([...noDuplicateOutfits, selected]);
    }
  }

  const handleClick = () => {
    handleOutfit();
    setStar(!star);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant={darkTheme ? "outline-light" : "outline-secondary"}
        size="small"
        onClick={handleClick}
        style={{ padding: "0px", height: "38px", align: "center" }}
      >
        {star ? (
          <StarIcon
            sx={{
              color: "#ffd700",
            }}
            style={{ padding: "0px", align: "center" }}
          />
        ) : (
          <StarBorderIcon />
        )}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        message={star ? "Added to Outfits!" : "Removed from Outfits!"}
        onClose={handleClose}
        autoHideDuration={3000}
      />
    </>
  );
}
