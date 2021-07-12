import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import About from "./pages/About";
import AppointmentForm from "./pages/AppointmentForm";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Examples from "./pages/Examples";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Things from "./pages/Things";
import PatientsForm from "./pages/PatientsForm";
import DoctorsForm from "./pages/DoctorsForm";

function App() {
  return (
    <Container textAlign='center'>
    <Navbar />

    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/doctors/new" component={DoctorsForm} />
        <Route exact path="/doctors/edit/:id" component={DoctorsForm} />

        <Route exact path="/patients" component={Patients} />
        <Route exact path="/patients/new" component={PatientsForm} />
        <Route exact path="/patients/edit/:id" component={PatientsForm} />

        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/appointments/new" component={AppointmentForm} />
        <Route exact path="/appointments/edit/:id" component={AppointmentForm} />

        
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/things" component={Things} /> */}
        <Route exact path="/examples" component={Examples} />
      </Switch>
      </Container>
  );
}

export default App;
