import { Input } from "@/components/core";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const khoroos = [
  "1-р хороо",
  "2-р хороо",
  "3-р хороо",
  "4-р хороо",
  "5-р хороо",
  "6-р хороо",
  "7-р хороо",
];
const duurguud = [
  "Баянзүрх дүүрэг",
  "Хан-Уул дүүрэг",
  "Баянгол дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Чингэлтэй дүүрэг",
];
const buildings = [
  "Нархан хотхон",
  "26-р байр",
  "Хоймор хотхон",
  "45-р байр",
  "Зайсан хотхон ",
];

const OrderStep1 = () => {
  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Image
          alt="stepordersvg"
          width={45}
          height={45}
          src="/logo_svg/orderStep.svg"
        />
        <div>
          <Typography component="p" variant="subtitle2">
            Алхам 1
          </Typography>
          <Typography component="p">Хаягийн мэдээлэл оруулах</Typography>
          <Typography variant="body2" component="p" sx={{ color: "#0468C8" }}>
            Хүлээгдэж байна
          </Typography>
        </div>
      </Box>
      <Stack my={10} boxShadow={3} gap={10} p={5} borderRadius={2}>
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Typography>Хаяг аа сонгоно уу</Typography>
          <Select sx={{ bgcolor: "#ECEDF0", color: "#8B8E95" }}>
            <MenuItem disabled value="">
              <em>Дүүрэг сонгоно уу</em>
            </MenuItem>
            {duurguud.map((duureg) => (
              <MenuItem key={duureg} value={duureg}>
                {duureg}
              </MenuItem>
            ))}
          </Select>
          <Select sx={{ bgcolor: "#ECEDF0", color: "#8B8E95" }}>
            <MenuItem disabled value="">
              <em>Хороо сонгоно уу</em>
            </MenuItem>
            {khoroos.map((khoroo) => (
              <MenuItem key={khoroo} value={khoroo}>
                {khoroo}
              </MenuItem>
            ))}
          </Select>
          <Select sx={{ bgcolor: "#ECEDF0", color: "#8B8E95" }}>
            <MenuItem disabled value="">
              <em>Байр гудамж сонгоно уу</em>
            </MenuItem>
            {buildings.map((building) => (
              <MenuItem key={building} value={building}>
                {building}
              </MenuItem>
            ))}
          </Select>
        </div>

        <Input label="Нэмэлт мэдээлэл" desc="Орц давхар орцны код..." />
        <Input label="Утасны дугаар*" desc="Утасны дугаараа оруулна уу" />
        <div>
          <Typography>Төлбөр төлөх</Typography>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              sx={{ mr: 50 }}
              control={<Checkbox defaultChecked />}
              label="Бэлнээр"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Картаар"
            />
          </FormGroup>
        </div>
      </Stack>
    </Box>
  );
};

export default OrderStep1;
