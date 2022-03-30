import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials(): JSX.Element {
  return (
    <Fragment>
      <a
        aria-label="link to Rolands Github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rj13371"
      >
        <FontAwesomeIcon
          color="black"
          style={{ marginRight: "15px" }}
          icon={["fab", "github"]}
          size="lg"
        />
      </a>
      <a
        aria-label="link to Rolands linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/roland-matheson-b37a09224/"
      >
        <FontAwesomeIcon
          color="black"
          style={{ marginRight: "15px" }}
          icon={["fab", "linkedin"]}
          size="lg"
        />
      </a>
      <a
        aria-label="link to Rolands medium"
        target="_blank"
        rel="noreferrer"
        href="https://rolandmatheson.medium.com/"
      >
        <FontAwesomeIcon
          color="black"
          style={{ marginRight: "15px" }}
          icon={["fab", "medium"]}
          size="lg"
        />
      </a>
      <a
        aria-label="email for rolands gmail"
        target="_blank"
        rel="noreferrer"
        href="mailto:rolandmathesondev@gmail.com"
      >
        <FontAwesomeIcon
          color="black"
          style={{ marginRight: "15px" }}
          icon={"envelope"}
          size="lg"
        />
      </a>
    </Fragment>
  );
}
