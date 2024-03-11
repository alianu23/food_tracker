"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import { UserContext } from "@/context";
import { FoodMap } from "./foodMap";
import Label from "../../label";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const HistoryPage = ({}: React.PropsWithChildren) => {
  const { user } = React.useContext(UserContext);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Name</TableCell>
              <TableCell align="center">Food info</TableCell>
              <TableCell align="center">Payment</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Delivery table</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.orders?.map((row: any) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderNo}
                </TableCell>
                <TableCell align="center">
                  {console.log("Row foods===", row.foods)}
                  {row.foods.map((food: any) => (
                    <Typography key={food._id}>
                      {food.food.name}*{food.count} = {"Total"}{" "}
                      {food.food.price * food.count}
                    </Typography>
                  ))}
                </TableCell>
                <TableCell align="center">
                  {row.payment.paymentAmount} {""}
                  <Label
                    color={row.payment.status === "Paid" ? "success" : "error"}
                  >
                    {row.payment.status}
                  </Label>
                </TableCell>
                <TableCell align="center">
                  {row.address.duureg + ", " + row.address.khoroo}
                </TableCell>
                <TableCell align="center">
                  <Label
                    color={
                      row.delivery.status === "Pending"
                        ? "error"
                        : row.delivery.status === "Progressing"
                        ? "warning"
                        : "success"
                    }
                  >
                    {row.delivery.status}
                  </Label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
