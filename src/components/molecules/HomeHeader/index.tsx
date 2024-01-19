import { Box, Container, Typography } from "@mui/material";

export function HomeHeader() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: { lg: 25, md: 20, xs: 0 },
        pb: { lg: 20, md: 10, xs: 0 },
        height: { md: "100%", xs: "100vh" },
        display: { md: "block", xs: "flex" },
        alignItems: { xs: "center" },
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontSize: { xs: 32 } }}
        >
          Willy Samuel Paz Colque
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ fontSize: { xs: 22 } }}
        >
          Backend Developer and passionate programmer
        </Typography>
        {/* <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Abaut me</Button>
          </Stack> */}
      </Container>
    </Box>
  );
}
