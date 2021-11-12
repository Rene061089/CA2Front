import React, { useEffect, useState } from "react";

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
    // console.log(data.covid);
    setCovid(...data.covid, covid);
    // console.log(data.covid);
    // setCovid({
    //   covidinfo: covid.covidReference,
    //   country: covid.covid[0].country,
    //   code: covid.covid[0].code,
    //   confirmed: covid.covid[0].confirmed,
    //   recovered: covid.covid[0].recovered,
    //   critical: covid.covid[0].critical,
    //   deaths: covid.covid[0].deaths,
    // });
  };

  return (
    <div>
      <p> Country: {covid.country} </p>
      <p> Country Code: {covid.code} </p>
      <p> Confirmed Infected: {covid.confirmed} </p>
      <p>Confirmed Recovered: {covid.recovered} </p>
      <p> Confirmed Critical: {covid.critical} </p>
      <p> Confirmed Death: {covid.deaths} </p>
      {/* <p>Ref: {covid.covidinfo} </p> */}
    </div>
  );
};

export default function App() {
  return <FetchCovid />;
}
