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
  Key,
} from "@mui/icons-material";
import Image from "next/image";
import CardModal from "../cardModal";

const foodData = [
  { id: 1, img: "/foodImg/food1.png", name: "Main pizza", price: "34,800" },
  { id: 2, img: "/foodImg/food2.png", name: "Food tart", price: "22,800 " },
  { id: 3, img: "/foodImg/food3.png", name: "Өглөөний хоол", price: "14,800" },
  { id: 4, img: "/foodImg/food4.png", name: "Зутан шөл", price: "17,800" },
];

const disFoodData = [
  {
    id: 5,
    img: "/discountFoodImg/dis1.png",
    name: "Хөнгөн хоол",
    price: "14,800",
  },
  { id: 6, img: "/discountFoodImg/dis2.png", name: "Зайрмаг", price: "4,800 " },
  {
    id: 7,
    img: "/discountFoodImg/dis3.png",
    name: "Өглөөний хоол",
    price: "24,800",
  },
  {
    id: 8,
    img: "/discountFoodImg/dis4.png",
    name: "Өглөөний хоол",
    price: "24,800",
  },
];

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

export const DiscountFoodCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        gap: 30,
      }}
    >
      {disFoodData.map((data) => (
        <Card
          key={data.id}
          sx={{ width: "100%" }}
          style={{ border: "none", boxShadow: "none" }}
        >
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                height="100%"
                image={data.img}
                component="img"
                alt="green iguana"
                onClick={() => handleOpen()}
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
          {open && (
            <CardModal
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />
          )}
        </Card>
      ))}
    </div>
  );
};
export const FoodCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        gap: 30,
        border: "none",
      }}
    >
      {foodData.map((data) => (
        <Card
          key={data.id}
          sx={{ width: "100%" }}
          style={{ border: "none", boxShadow: "none" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              image={data.img}
              alt="green iguana"
              onClick={() => handleOpen()}
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
          {open && (
            <CardModal
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />
          )}
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
