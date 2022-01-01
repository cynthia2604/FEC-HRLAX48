import React from "react";
import { useStateValue } from "./store/StateProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default function Collection({ setShow }) {
  const [star, setStar] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-secondary"
        size="small"
        onClick={() => {
          setStar(!star);
        }}
      >
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
    </>
  );
}
