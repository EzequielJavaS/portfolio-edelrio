import { makeStyles } from "@material-ui/core";
import {Navbar} from "./components/Navbar"
import {About} from "./components/About"
import {Skills} from "./components/Skills"
import {MyWork} from "./components/MyWork"
import {Contact} from "./components/Contact"
import { Header } from "./components/Header";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Header id="header"/>
      <About title="Sobre mí" id="about" />
      <Skills title="Qué sé hacer" id="skills" />
      <MyWork title="Proyectos" id="mywork" />
      <Contact title="Contacto" id="contact" />
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
  root:{
  }
}))

export default App;