import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Stack,
  styled,
  FormControlLabel,
  FormGroup,
  Checkbox,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Button, Input } from "../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CategoryContext, FoodContext } from "@/context";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FoodModal({
  handleClose,
  open,
  handleFileChange,
  handleSave,
  loading,
}: any) {
  const { categories } = React.useContext(CategoryContext);

  const [newFood, setNewFood] = React.useState({
    name: "",
    description: "",
    price: 0,
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    handleChange(name, value);
  };

  const handleChange = (name: string, value: string) => {
    setNewFood({ ...newFood, [name]: value });
  };

  const handleAdd = () => {
    handleSave(newFood);
  };
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
            <Typography variant="h3">Хоол нэмэх хэсэг</Typography>
            <MuiButton onClick={handleClose} sx={{ fontSize: 23 }}>
              X
            </MuiButton>
          </Stack>

          <Input
            name="name"
            onChange={handleInputChange}
            label="Name"
            desc="Хоолны нэрийг оруулна уу"
          />
          <Input
            name="price"
            onChange={handleInputChange}
            label="Price"
            desc="Үнийн дүнг оруулна уу"
          />
          <Input
            name="description"
            onChange={handleInputChange}
            label="Description"
            desc="Write food Description"
          />
          <Stack>
            <Input label="Discount" desc="Хямдралын хувийг оруулна уу" />
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="sale"
              />
            </FormGroup>
          </Stack>
          <Stack>
            <FormControl sx={{ m: 1, minWidth: 120 }} required>
              <InputLabel id="demo-simple-select-disabled-label">
                Катигори
              </InputLabel>
              <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                value={newFood.category}
                label="Катигори"
                name="category"
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Stack>
          <MuiButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </MuiButton>
          <Button disabled={loading} onClick={handleAdd} label="нэмэх"></Button>
        </Box>
      </Modal>
    </div>
  );
}
