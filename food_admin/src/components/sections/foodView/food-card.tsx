import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { fCurrency } from "@/utils/format-number";

import Label from "@/components/label";
// import { ColorPreview } from "@/components/color-utils";

// ----------------------------------------------------------------------

export default function FoodCard({ food }: any) {
  const renderImg = (
    <Box
      component="img"
      alt={food.name}
      src={food.image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderDiscountPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {food.price}
      </Typography>
      &nbsp;
      {fCurrency(food.discountPrice)}
    </Typography>
  );

  const renderPrice = (
    <Typography variant="subtitle1"> &nbsp;{fCurrency(food.price)}</Typography>
  );

  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {food.name}
        </Link>
        <Typography variant="body2">{food.description}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {food.isSale === true ? renderDiscountPrice : renderPrice}
        </Stack>
      </Stack>
    </Card>
  );
}
