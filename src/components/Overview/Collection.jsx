import React from "react";
import { useStateValue } from "./store/StateProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Snackbar from "@mui/material/Snackbar";

export default function Collection() {
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
      <Button variant="outline-secondary" size="small" onClick={handleClick}>
        {star ? (
          <StarIcon
            sx={{
              color: "#ffd700",
            }}
          />
        ) : (
          <StarBorderIcon />
        )}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        message={star ? "Added To Collection!" : "Removed From Collection!"}
        onClose={handleClose}
        autoHideDuration={1000}
      />
    </>
  );
}
