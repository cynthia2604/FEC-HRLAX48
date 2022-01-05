import React from "react";
import { useStateValue } from "./store/StateProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Snackbar from "@mui/material/Snackbar";

export default function Collection({ darkTheme }) {
  const [star, setStar] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
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
        message={star ? "Added to outfits!" : "Removed from outfits!"}
        onClose={handleClose}
        autoHideDuration={3000}
      />
    </>
  );
}
