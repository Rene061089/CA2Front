import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

import URL from "./settings";

const FetchCovid = () => {
  const [covid, setCovid] = useState([
    {
      country: "",
      code: "",
      confirmed: "",
      recovered: "",
      critical: "",
      deaths: "",
    },
  ]);

  useEffect(() => {
    getCovidInfo();
  }, []);

  const getCovidInfo = async () => {
    const res = await fetch(URL + "/api/fetch");
    const data = await res.json();
    setCovid(...data.covid, covid);
  };

  return (
    <div>
      <Card
        style={{
          color: "white",
          backgroundColor: "black",
          width: "350px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ul>
          <li>
            <em>
              <strong>Nyeste Covid19 tal Danmark</strong>
            </em>
            <ul>
              <li>
                <p> Country: {<strong>{covid.country}</strong>}</p>
              </li>

              <li>
                <p> Country Code: {<strong>{covid.code}</strong>}</p>
              </li>

              <li>
                <p>Confirmed Infected: {<strong>{covid.confirmed}</strong>}</p>
              </li>
              <li>
                <p>Confirmed Recovered: {<strong>{covid.recovered}</strong>}</p>
              </li>
              <li>
                <p>Confirmed Critical: {<strong>{covid.critical}</strong>}</p>
              </li>
              <li>
                <p> Confirmed Death: {<strong>{covid.deaths}</strong>} </p>
              </li>
              {/* <p>Ref: {covid.covidinfo} </p> */}
            </ul>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default function App() {
  return <FetchCovid />;
}
