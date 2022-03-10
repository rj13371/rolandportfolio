import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
export default function Skills() {
  const { t } = useContext(LanguageContext);

  return (
    <Fragment>
      <div
        style={{
          margin: "100px",
        }}
      >
        <Card.Title>
          {" "}
          <h3>
            {" "}
            <b>{t("Skills")}</b>{" "}
          </h3>{" "}
        </Card.Title>

        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "js"]}
          size="lg"
        />
        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "html5"]}
          size="lg"
        />
        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "css3"]}
          size="lg"
        />
        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "react"]}
          size="lg"
        />
        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "node-js"]}
          size="lg"
        />
        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "linux"]}
          size="lg"
        />
        <FontAwesomeIcon
          style={{ marginRight: "30px" }}
          icon={["fab", "github"]}
          size="lg"
        />
        <FontAwesomeIcon color="black" icon={["fab", "ethereum"]} size="lg" />
      </div>
    </Fragment>
  );
}
