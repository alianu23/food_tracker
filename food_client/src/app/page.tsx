import { Grid, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      {/* sx={{ background: "white" }} */}
      <Grid
        container
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          gap: 8,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h1">Welcome MUI framework</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            click
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
