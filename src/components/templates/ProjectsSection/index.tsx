import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export function ProjectsSection() {
  const projects = [
    {
      name: "E-commerce API",
      description: "This is an API that you can to use for ...",
      imageSrc: "https://source.unsplash.com/random?wallpapers",
      skills: [
        { name: "python", type: "Programming Language", icon: "<Pycon/>" },
        { name: "FastApi", type: "Framework", icon: "" },
        { name: "SQLAlchemy", type: "Python ORM", icon: "" },
        { name: "MySql", type: "SQL database", icon: "" },
        { name: "Doker Compose", type: "multi container tol", icon: "" },
      ],
    },
    {
      name: "FaceAuth",
      description: "Auth system for facial recognition ...",
      imageSrc: "https://source.unsplash.com/random?wallpapers",
      skills: [
        { name: "python", type: "Programming Language", icon: "<Pycon/>" },
        { name: "Flask", type: "Python Micro-Framework", icon: "" },
        { name: "MongoDB", type: "No SQL Database", icon: "" },
        { name: "Mysql", type: "SQL database", icon: "" },
        { name: "Doker Compose", type: "multi container tol", icon: "" },
      ],
    },
    {
      name: "FER",
      description: "Sentiment analysis by facial recognition ...",
      imageSrc: "https://source.unsplash.com/random?wallpapers",
      skills: [
        { name: "python", type: "Programming Language", icon: "<Pycon/>" },
        { name: "Flask", type: "Python Micro-Framework", icon: "" },
        { name: "MongoDB", type: "No SQL Database", icon: "" },
        { name: "Mysql", type: "SQL database", icon: "" },
        { name: "Jitsi", type: "Opensource Meet tool", icon: "" },
      ],
    },
    {
      name: "MineSweeper",
      description: "MineSweeper game",
      imageSrc: "https://source.unsplash.com/random?wallpapers",
      skills: [
        { name: "C#", type: "Programming Language", icon: "<Pycon/>" },
        { name: "AspNet", type: "C# Web App Framework", icon: "" },
        { name: "Javascript", type: "programming Language", icon: "" },
      ],
    },
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography
        id="projects"
        sx={{ py: { md: 2, xs: 0 } }}
        variant="h3"
        align="left"
        color="text.primary"
        fontSize={32}
        gutterBottom
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.name.toLowerCase()} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: "56.25%",
                }}
                image="https://source.unsplash.com/random?wallpapers"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
