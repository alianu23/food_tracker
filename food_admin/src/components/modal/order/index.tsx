import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Stack,
  styled,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Button, Input } from "../../core";

import { UserContext } from "@/context";
import { useFormik } from "formik";
import * as yup from "yup";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

const validationSchema = yup.object({
  pStatus: yup.string(),
  dStatus: yup.string(),
});
export function OrderModal({ handleClose, open, order }: any) {
  const orderId = order._id;
  const { updateOrder, loading } = React.useContext(UserContext);
  const formik = useFormik({
    onSubmit: ({ pStatus, dStatus }) => {
      updateOrder(orderId, pStatus, dStatus);
      handleClose();
      console.log(
        "HandleSubmit orderid === ",
        orderId,
        "pStatus",
        pStatus,
        "dStatus",
        dStatus
      );
    },
    initialValues: { pStatus: "", dStatus: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h3">Edit Order Details</Typography>
            <MuiButton onClick={handleClose} sx={{ fontSize: 23 }}>
              X
            </MuiButton>
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            gap={5}
          >
            <Stack width={"100%"}>
              <Input
                name="orderNo"
                label="Order №"
                desc={order.orderNo}
                readOnly
              />
              <Typography>Buyer info</Typography>
              <Input name="name" label="Name" desc={order.user.name} readOnly />
              <Input
                name="phone"
                label="Phone number"
                desc={order.phone}
                readOnly
              />
              <Typography>Payment details</Typography>
              <Input
                name="paymentPrice"
                label="Price"
                desc={order.payment.paymentAmount}
                readOnly
              />
            </Stack>
            <Stack width={"100%"} mt={3}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Payment status
                </FormLabel>
                <RadioGroup
                  sx={{ display: "flex", flexDirection: "row" }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={order.payment.status}
                  name="pStatus"
                  value={formik.values.pStatus}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value="Paid"
                    control={<Radio />}
                    label="Paid"
                  />
                  <FormControlLabel
                    value="Unpaid"
                    control={<Radio />}
                    label="Unpaid"
                  />
                </RadioGroup>
              </FormControl>

              <Stack>
                <Stack my={3}>
                  <Typography fontWeight={400}>Address</Typography>
                  <Typography
                    border={1}
                    borderColor={"#D6D8DB"}
                    p={1}
                    borderRadius={1}
                    my={1}
                  >
                    {order.address.duureg +
                      ", " +
                      order.address.khoroo +
                      ", " +
                      order.address.info}
                  </Typography>
                </Stack>

                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Delivery status
                  </FormLabel>
                  <RadioGroup
                    sx={{ display: "flex", flexDirection: "row" }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={order.delivery.status}
                    name="dStatus"
                    value={formik.values.dStatus}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="Pending"
                      control={<Radio />}
                      label="Pending"
                    />
                    <FormControlLabel
                      value="Progressing"
                      control={<Radio />}
                      label="Progressing"
                    />
                    <FormControlLabel
                      value="Delivered"
                      control={<Radio />}
                      label="Delivered"
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Button
            disabled={loading}
            onClick={formik.handleSubmit}
            label="Засах"
          ></Button>
        </Box>
      </Modal>
    </div>
  );
}
