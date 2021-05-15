import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
export default function Main({ data }) {
  console.log(data);
  function createData(location, price, lat, lng) {
    return { location, price, lat, lng };
  }
  let rows = [];
  const order_data = []
    .concat(data)
    .sort((a, b) => (a.gasoleo_A_normal < b.gasoleo_A_normal ? -1 : 1))
    .map((item, i) => {
      console.log(item.$.lng);
      rows.push(
        createData(
          item.$.localidad + " " + item.$.rotulo + " " + item.$.direcc,
          item.$.gasoleo_A_normal,
          item.$.lat,
          item.$.lng
        )
      );
    });

  const showInMapClicked = (lat, lng) => {
    window.open("https://maps.google.com?q=" + lat + "," + lng);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>GASOLINERA</TableCell>
              <TableCell align="right">PRECIO</TableCell>
              <TableCell align="right">MAPS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.location}>
                <TableCell component="th" scope="row">
                  {row.location}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => showInMapClicked(row.lat, row.lng)}
                  >
                    MAPS
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
