"use client";

import { useContext, useState } from "react";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import { alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from "@/context";

export const account = {
  displayName: "Aдмин",
  email: "admin@gmail.com",
  photoURL: "/assets/images/avatars/avatar_25.jpg",
  role: "admin",
};

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Нүүр",
    icon: "eva:home-fill",
    path: "/",
  },
  {
    label: "Профайл",
    icon: "eva:person-fill",
  },
  {
    label: "Тохиргоо",
    icon: "eva:settings-2-fill",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const userOut = () => {
    logout();
    handleClose();
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: !open
            ? (theme) => alpha(theme.palette.grey[500], 0.08)
            : (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
        }}
      >
        <Avatar
          src={user?.avatarUrl}
          alt={user?.name}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {user?.name}
          {/* {user?.name.charAt(1).toUpperCase()} */}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose}>
            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: "dashed", m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={() => userOut()}
          sx={{ typography: "body2", color: "error.main", py: 1.5 }}
        >
          Гарах
        </MenuItem>
      </Popover>
    </>
  );
}
