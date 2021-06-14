import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from './components/NavBar';
import About from "./pages/About";
import AppointmentForm from "./pages/AppointmentForm";
import Appointments from "./pages/Appointments";
import Examples from "./pages/Examples";
import Home from "./pages/Home";
import Things from "./pages/Things";

function App() {
  return (
    <>
    <Navbar />
    <Container>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/appointments/new" component={AppointmentForm} />
        <Route exact path="/appointments/edit/:id" component={AppointmentForm} />
        
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/things" component={Things} /> */}
        <Route exact path="/examples" component={Examples} />
      </Switch>
      </Container>
    </>
  );
}

export default App;
