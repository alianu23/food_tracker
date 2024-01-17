import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  ButtonGroup,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";

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

export default function CardModal({ handleClose, handleOpen, open }: any) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container display={"flex"} flexDirection={"row"} gap={10}>
            <Grid item xs={5}>
              <Image
                alt=""
                width={250}
                height={250}
                src="/foodImg/modalPng.png"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>

            <Grid
              item
              xs={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={3}
            >
              <Grid item xs={2} position={"relative"}>
                <Button
                  onClick={handleClose}
                  sx={{ ml: 80, position: "absolute" }}
                >
                  <Close />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    fontWeight={600}
                    component="h2"
                    mt={10}
                  >
                    Main Pizza
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ color: "#18BA51" }}
                  >
                    34,800
                  </Typography>
                </div>
                <div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Орц
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body2"
                    bgcolor={"#F6F6F6"}
                    p={3}
                    borderRadius={4}
                  >
                    Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                  </Typography>
                </div>
                <div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Тоо
                  </Typography>
                  <div>
                    <Button>
                      <Remove
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          py: 1,
                          borderRadius: 2,
                        }}
                      />
                    </Button>
                    <input
                      type="text"
                      placeholder="1"
                      style={{
                        border: "none",
                        textAlign: "center",
                        paddingTop: 4,
                        paddingBottom: 4,
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    />
                    <Button>
                      <Add
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          py: 1,
                          borderRadius: 2,
                        }}
                      />
                    </Button>
                  </div>
                </div>

                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth
                  sx={{ bgcolor: "#18BA51", mt: 2, boxShadow: "none", mb: 10 }}
                >
                  Сагслах
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
