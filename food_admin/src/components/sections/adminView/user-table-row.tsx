import { useContext, useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Label from "@/components/label";
import Iconify from "@/components/iconify";
import { UserContext } from "@/context";

// ----------------------------------------------------------------------

export default function UserTableRow({
  order,
  selected,
  handleClick,
  user,
}: any) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  // console.log("DF", order);

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={""} src={"/assets/images/products/product_1.jpg"} />
            <Typography variant="subtitle2" noWrap>
              {order.orderNo}
              <br />
              {"Tsuivan"}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>
          {user.phone || "99999999"}
          <br />
          {order.user.name}
        </TableCell>

        <TableCell>
          {order.payment.paymentAmount}
          <Label color={order.payment.status === "Paid" ? "success" : "error"}>
            {order.payment.status}
          </Label>
          <br />
          {order.payment.status === "Paid"
            ? order.payment.paidDate
            : order.payment.createdAt}
        </TableCell>

        <TableCell align="center">
          {order.address.duureg + ", " + order.address.khoroo}
        </TableCell>

        <TableCell>
          <Label
            color={
              order.delivery.status === "Pending"
                ? "error"
                : order.delivery.status === "Progressing"
                ? "warning"
                : "success"
            }
          >
            {order.delivery.status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
