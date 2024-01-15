import { Container } from "@mui/material";
import "./App.css";
import { LabelBottomNavigation, ResponsiveNavBar } from "./components";

function App() {
  return (
    <>
      <ResponsiveNavBar />
      <Container maxWidth="lg" disableGutters>
        <header id="myname">
          <h1>Willy Samuel Paz Colque</h1>
          <hr />
          <span>
            Soy desarrollador Back-End y apasionado por la Programación
          </span>
        </header>
        <section id="about">
          <h2>Sobre Mí</h2>
          <p>
            Soy desarrollador Back-End apasionado por la Programación, me
            encanta aprender cosas nuevas y resolver problemas con resiliencia.
            Me gusta trabajar en equipo y compartir conocimientos con las
            personas que me rodean. Quiero ser un gran desarrollador de software
            e Inteligencia Artificial y en un futuro crear algo innovador que
            ayude a las personas y al mundo.
          </p>
        </section>

        <section id="projects">
          <h2>Proyectos</h2>
          <div className="project">
            <h3>E-commerce Kong</h3>
            <p>Tienda virtual que...</p>
          </div>

          <div className="project">
            <h3>Face Auth</h3>
            <p>Sistema de autenticación por reconocimiento facial...</p>
          </div>

          <div className="project">
            <h3>MineSweeper</h3>
            <p>Juego de Busca Minas...</p>
          </div>

          <div className="project">
            <h3>SCESI Cappuccino</h3>
            <p>
              Web que ayuda a estudiantes de la UMSS a organizar sus horarios...
            </p>
          </div>
        </section>

        <section id="experience">
          <h2>Experiencia Laboral</h2>
          {/* Agrega tus experiencias laborales aquí */}
        </section>

        <section id="skills">
          <h2>Habilidades Técnicas</h2>
          <div className="skill-category">
            <h3>Lenguajes de Programación</h3>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Librerías y Frameworks</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Nest.js</li>
              <li>ReactJS</li>
              {/* Agrega las demás librerías aquí */}
            </ul>
          </div>

          {/* Agrega más categorías de habilidades según sea necesario */}
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <p>Email: willypaz243@gmail.com</p>
        </section>
      </Container>
      <LabelBottomNavigation />
    </>
  );
}

export default App;
