import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPerson } from "../Actions/index";

const DisplayPerson = ({ url, ind }) => {
  const [person, setPerson] = useState({});
  useEffect(() => {
    getPerson(url).then(x => {
      setPerson(x)});
  }, []);

  const closeDetail = e => {
    let target = e.target.parentNode;
    target.style.display = "none";
  };

  return (
    <Container id={ind} className="inset" style={{ paddingBottom: "1rem" }}>
      <span id="close-detail" onClick={closeDetail}>
        close
      </span>
      <p>
        Height: <span className="detail">{person.height}</span>
      </p>
      <p>
        Mass: <span className="detail">{person.mass}</span>
      </p>
      <p>
        Hair Colour: <span className="detail">{person.hair_color}</span>{" "}
      </p>
      <p>
        Skin Colour: <span className="detail">{person.skin_color}</span>{" "}
      </p>
      <p>
        Eye Colour: <span className="detail">{person.eye_color}</span>
      </p>
      {/* <p>No of Films: <span className="detail">{person.films}</span> </p> */}
      {/* <p>Home World: <span className="detail">{person.homeworld}</span> </p> */}
    </Container>
  );
};

export default DisplayPerson;
