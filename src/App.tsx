import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import {
  HomeHeader,
  LabelBottomNavigation,
  ResponsiveNavBar,
} from "./components/molecules";
import { AboutMeSection, ProjectsSection } from "./components/templates";

function App() {
  const defaultTheme = createTheme({
    palette: dark,
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ResponsiveNavBar />
      <main>
        <HomeHeader />
        <AboutMeSection />
        <ProjectsSection />
      </main>

      <LabelBottomNavigation />
    </ThemeProvider>
  );
}

export default App;
