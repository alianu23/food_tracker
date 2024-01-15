import { Grid, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid item>
          <Typography variant="h1">Welcome MUI framework</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            click
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
