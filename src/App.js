import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./Layouts/Main";
import React from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
var parseString = require("xml2js").parseString;

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
  
    axios
      .get(
        `https://api.allorigins.win/raw?url=https://www.komparing.com/es/gasolina/include/process-xml_maxLat-43.35420606979338_minLat-43.144027589216655_maxLong--1.8814086914062502_minLong--2.1615600585937504_zoomMapa-11_order-gsAs_gsA`
        ,{ crossdomain: true })
      .then((res) => {
        let xml = res.data;
        parseString(xml, function (err, result) {
          setData(result.marcas.marker);
          
        });
       
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {data !== null ? <Main data={data} /> : <CircularProgress />}
    </div>
  );
}

export default App;
