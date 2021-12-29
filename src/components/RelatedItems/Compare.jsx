import React from "react";
import axios from "axios";
import CompareTable from "./CompareTable";
import Options from "../../config.js";

export default function Compare(props) {
  const [selectedDescription, setSelectedDescription] = React.useState();

  React.useEffect(() => {
    axios
      .get(`${Options.URL}/products/${props.selected.id}`, {
        headers: {
          Authorization: Options.TOKEN,
        },
      })
      .then((res) => {
        setSelectedDescription(res.data);
      });
  }, [props.selected]);

  return (
    <div className="comparison-table">
      <CompareTable
        selectedDescription={selectedDescription}
        selectRelated={props.selectRelated}
        selected={props.selected}
      />
    </div>
  );
}
