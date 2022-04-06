import "./App.css";
import React, { useContext } from "react";
import VisibilityComponent from "./utils/VisibilityComponent";
import ChangeLanguage from "./utils/ChangeLanguage";
import Text from "./components/Text";
import Image from "react-bootstrap/Image";
import profile from "./assets/profile.jpeg";
import Projects from "./components/Projects";
import { Fragment } from "react";
import initFontAwesome from "./icons/fontAwesomeConfig";
import Footer from "./components/Footer";
import { LanguageContext } from "./context/LanguageContext";

initFontAwesome();

function App():JSX.Element {
  const { t } = useContext(LanguageContext);

  return (
    <Fragment>
      <div className="App">
        <ChangeLanguage />

        <VisibilityComponent
          children={
            <Fragment>
              {" "}
              <h1
                style={{
                  padding: "100px",
                }}
              >
                {t("Hello👋, my name is Roland Matheson")}
              </h1>{" "}
              <Image
                style={profile ? { width: "200px" } : { display: "none" }}
                alt="profile picture of Roland"
                src={profile}
                roundedCircle
              />{" "}
            </Fragment>
          }
        />

        <VisibilityComponent
          children={
            <h2
              style={{
                padding: "100px",
              }}
            >
              <b>{t("JavaScript Web Developer")} </b>{" "}
            </h2>
          }
        />

        <VisibilityComponent
          children={
            <Text
              
            />
          }
        />

        <VisibilityComponent children={<Projects />} />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
