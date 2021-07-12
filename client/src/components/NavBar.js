
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  const history = useHistory()
  const { pathname } = useLocation();
  return (
    <Menu>


      <Menu.Item
        active={pathname === '/'}
        content='Home'
        onClick={() => history.push('/')}
      />
      <Menu.Item
        active={pathname === '/doctors'}
        content='Doctors'
        onClick={() => history.push('/doctors')}
      />
      <Menu.Item
        active={pathname === '/patients'}
        content='Patients'
        onClick={() => history.push('/patients')}
      />
      <Menu.Item
        active={pathname === '/appointments'}
        content='Appointments'
        onClick={() => history.push('/appointments')}
      />
      <Menu.Item
        active={pathname === '/appointments/new'}
        content='New Appt'
        onClick={() => history.push('/appointments/new')}
      />
      <Menu.Item>
        active={pathname === '/examples'}
        content='Examples'
        onClick={() => history.push('/examples')}
      </Menu.Item>


    </Menu>
  );
}

export default Navbar;