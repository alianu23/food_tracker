import React, { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import {
  Schedule,
  ImportContactsOutlined,
  RiceBowl,
  Key,
} from "@mui/icons-material";
import Image from "next/image";
import CardModal from "../cardModal";
import { FoodContext } from "@/context";

const InfoData = [
  {
    id: 9,
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хүргэлтийн төлөв хянах",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 10,
    icon: <Schedule sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Шуурхай хүргэлт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 11,
    icon: <RiceBowl sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Эрүүл, баталгаат орц",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    id: 12,
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хоолны өргөн сонголт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
];
type Props = {
  data: {
    _id: string;
    name: string;
    price: number;
    discountPrice?: number;
    isSale: undefined | boolean;
    image: string;
  };
};

export const FoodCard = ({ data }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log("DATA from dash", data);

  return (
    <Grid
      container
      spacing={1}
      style={{
        display: "flex",
        width: "100%",
        border: "none",
      }}
    >
      <Grid item lg={3}>
        <Card
          sx={{ width: "250px" }}
          style={{ border: "none", boxShadow: "none" }}
        >
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                sx={{ borderRadius: 2 }}
                component="img"
                height={150}
                image={data?.image}
                alt="green iguana"
                onClick={() => handleOpen()}
              />
              {data?.isSale === true ? (
                <Chip
                  label="-20%"
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 15,
                    bgcolor: "#18BA51",
                    color: "white",
                  }}
                />
              ) : (
                ""
              )}
              <CardContent>
                <Typography gutterBottom variant="h6" component="p">
                  {data?.name}
                </Typography>
                {data?.isSale === true ? (
                  <div style={{ display: "flex", gap: 7 }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#18BA51", fontWeight: 800 }}
                    >
                      {data?.discountPrice}₮
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ textDecoration: "line-through" }}
                    >
                      {data?.price}₮
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Typography
                      variant="h6"
                      sx={{ color: "#18BA51", fontWeight: 800 }}
                    >
                      {data?.price}₮
                    </Typography>
                  </div>
                )}
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </Grid>

      {open && <CardModal handleClose={handleClose} open={open} food={data} />}
    </Grid>
  );
};

export const InfoCard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        gap: 50,
      }}
    >
      {InfoData.map((data) => (
        <Card
          key={data.id}
          sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
        >
          <CardContent>
            {data.icon}
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontWeight: 600 }}
              component="div"
            >
              {data.name}
            </Typography>
            <Typography>{data.desc}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
