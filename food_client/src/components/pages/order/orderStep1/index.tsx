import { Input } from "@/components/core";
import { UserContext } from "@/context";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

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

const OrderStep1 = ({ formik }: any) => {
  const { user } = useContext(UserContext);
  return (
    <Box>
      {user?.orders?.map((order: any) => order.address) ? (
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Image
            alt="stepordersvg"
            width={45}
            height={45}
            src="/logo_svg/orderdone.svg"
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
      ) : (
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
      )}

      <Stack my={10} boxShadow={3} gap={10} p={5} borderRadius={2}>
        {user?.orders?.map((order: any) => order.address) ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <Typography variant="body1" fontWeight={600}>
              Хаяг аа оруулна уу
            </Typography>
            <Stack>
              {user?.orders?.map((order: any) => (
                <Stack>
                  <Input
                    desc="Дүүрэг"
                    value={order.address.duureg}
                    label="Дүүрэг"
                  />
                  <Input
                    desc="Дүүрэг"
                    value={order.address.khoroo}
                    label="Хороо"
                  />
                  <Input
                    desc="Дүүрэг"
                    value={order.address.buildingNo}
                    label="Байр"
                  />
                  <Input
                    label="Нэмэлт"
                    value={order.address.info}
                    desc="Орц давхар орцны код..."
                  />
                  <Input
                    label="Утасны дугаар"
                    value={order.phone}
                    desc={"Дугаараа оруулна уу"}
                  />
                </Stack>
              ))}
            </Stack>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <Typography>Хаяг аа оруулна уу</Typography>
            <Stack>
              <Select
                value={formik.values.duureg}
                onChange={formik.handleChange}
                name="duureg"
                sx={{ bgcolor: "#ECEDF0" }}
              >
                <MenuItem disabled value="">
                  <em>Дүүрэг сонгоно уу</em>
                </MenuItem>
                {duurguud.map((duureg) => (
                  <MenuItem key={duureg} value={duureg}>
                    {duureg}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.duureg}
              </FormHelperText>
            </Stack>
            <Stack>
              <Select
                value={formik.values.khoroo}
                onChange={formik.handleChange}
                name="khoroo"
                sx={{ bgcolor: "#ECEDF0" }}
              >
                <MenuItem disabled value="">
                  <em>Хороо сонгоно уу</em>
                </MenuItem>
                {khoroos.map((khoroo) => (
                  <MenuItem key={khoroo} value={khoroo}>
                    {khoroo}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.khoroo}
              </FormHelperText>
            </Stack>
            <Stack>
              <Select
                value={formik.values.buildingNo}
                onChange={formik.handleChange}
                name="buildingNo"
                sx={{ bgcolor: "#ECEDF0" }}
              >
                <MenuItem disabled value="">
                  <em>Байр гудамж сонгоно уу</em>
                </MenuItem>
                {buildings.map((building) => (
                  <MenuItem key={building} value={building}>
                    {building}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.buildingNo}
              </FormHelperText>
            </Stack>
            <Input
              label="Нэмэлт мэдээлэл"
              name="info"
              value={formik.values.info}
              onChange={formik.handleChange}
              errorText={formik.errors.info}
              desc="Орц давхар орцны код..."
            />
            <Input
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              errorText={formik.errors.phone}
              label="Утасны дугаар*"
              desc={"Дугаараа оруулна уу"}
            />
          </div>
        )}

        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Төлбөр төлөх
            </FormLabel>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Cash"
              name="method"
              value={formik.values.method}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="Card" control={<Radio />} label="Card" />
              <FormControlLabel value="Qpay" control={<Radio />} label="Qpay" />
            </RadioGroup>
          </FormControl>
          <FormHelperText sx={{ color: "red" }}>
            {formik.errors.method}
          </FormHelperText>
        </div>
      </Stack>
    </Box>
  );
};

export default OrderStep1;
