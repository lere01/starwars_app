import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { getAll, getPerson } from "../Actions/index";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../Style/style.css";
import DisplayPerson from "./Person";

const Home = ({
  getAll,
  check,
  data_entering,
  isLoading,
}) => {
  const [data, setdata] = useState([]);

  useEffect((data_entering, getAll) => {
    getAll();
    setdata(data_entering);
  }, [check]);

  const openDetail = e => {
    e.preventDefault();
    let siblingID = e.target.nextSibling.id;
    let divTarget = document.getElementById(siblingID);
    divTarget.style.display = "block";
  };

  return (
    <Container id="main" >
      <Container id="left" >
        <div id="list">
          <span className="header-p">Your Favourite Starwars Character</span>
          {isLoading === true && (
            <Container style={{ alignContent: "center", alignItems: "center" }}>
              <Loader
                style={{ display: "inline-block", marginRight: "1rem" }}
                type="TailSpin"
                color="#000"
                height={30}
                width={30}
              />
              <h3 style={{ display: "inline" }}>
                Please hold on, fetching your data
              </h3>
            </Container>
          )}
          {isLoading === false &&
            data.length > 1 &&
            data.map((item, ind) => (
              <Container>
                <a
                  reactKey={ind}
                  href={item[1]}
                  id={item[1]}
                  onClick={openDetail}
                >
                  {item[0]}
                </a>
                <DisplayPerson ind={ind} url={item[1]} />
              </Container>
            ))}
        </div>
      </Container>

    </Container>
  );
};

const mapStateToProps = ({ UpdateReducer }) => ({
  data_entering: UpdateReducer?.namesByUrls,
  check: UpdateReducer?.check,
  isLoading: UpdateReducer?.isLoading,
});

export default connect(mapStateToProps, { getAll: getAll, getOne: getPerson })(
  Home
);
