import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import {
  Schedule,
  ImportContactsOutlined,
  RiceBowl,
} from "@mui/icons-material";
import Image from "next/image";

const foodData = [
  { img: "/foodImg/food1.png", name: "Main pizza", price: "34,800" },
  { img: "/foodImg/food2.png", name: "Food tart", price: "22,800 " },
  { img: "/foodImg/food3.png", name: "Өглөөний хоол", price: "14,800" },
  { img: "/foodImg/food4.png", name: "Зутан шөл", price: "17,800" },
];

const disFoodData = [
  { img: "/discountFoodImg/dis1.png", name: "Өглөөний хоол", price: "14,800" },
  { img: "/discountFoodImg/dis2.png", name: "Зайрмаг", price: "4,800 " },
  { img: "/discountFoodImg/dis3.png", name: "Өглөөний хоол", price: "24,800" },
  { img: "/discountFoodImg/dis4.png", name: "Өглөөний хоол", price: "24,800" },
];

const InfoData = [
  {
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хүргэлтийн төлөв хянах",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Schedule sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Шуурхай хүргэлт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <RiceBowl sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Эрүүл, баталгаат орц",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <ImportContactsOutlined sx={{ color: "#18BA51", fontSize: 35 }} />,
    name: "Хоолны өргөн сонголт",
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export const DiscountFoodCard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        gap: 50,
      }}
    >
      {disFoodData.map((data) => (
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                height="100%"
                image={data.img}
                component="img"
                alt="green iguana"
              />
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
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <div style={{ display: "flex", gap: 10 }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#18BA51", fontWeight: 800 }}
                >
                  {data.price}
                </Typography>
                <Typography
                  variant="h6"
                  style={{ textDecoration: "line-through" }}
                >
                  {data.price}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};
export const FoodCard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        gap: 50,
      }}
    >
      {foodData.map((data) => (
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              image={data.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#18BA51", fontWeight: 800 }}
              >
                {data.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
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
        <Card sx={{ width: "100%", borderRadius: 3 }}>
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
