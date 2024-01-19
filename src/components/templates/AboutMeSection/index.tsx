import { Container, Typography } from "@mui/material";

export function AboutMeSection() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
        id="aboutme"
        sx={{ py: { md: 2, xs: 0 } }}
        variant="h3"
        align="left"
        color="text.primary"
        fontSize={32}
      >
        About me
      </Typography>
      <Typography align="center" color="text.secondary" fontSize={20} paragraph>
        Hello, I'm Willy - 🚀 Back-End Developer with a bit of knowledge in
        Front-End development and much experience programming. My interest is to
        enhance my skills to create large-scale and high-performance computing
        projects. 💻✨
      </Typography>
    </Container>
  );
}
