import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import { setDelUser } from "../../redux/userSlice";
import { useMediaQuery } from '@mui/material';
import NavbarMovile from './NavbarMovile';

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isSmallerThan700px = useMediaQuery('(max-width:700px)');

  const navigate = useNavigate();
  const routes = {
    home: "/",
    login: "/login",
    register: "/login/create",
    user: "/user",
    compras: "/compras",
    rentas: "/rentas",
  };
  
  const logout = () => {
    // Elimina la cookie 'localSession'
    Cookies.remove("localSession");
    dispatch(setDelUser(true));
    navigate("/");
  };

  if (isSmallerThan700px) {
    return (
      <NavbarMovile user={user} logout={logout} />
    );
  } else {
    return (
      <Navbar className={styles.navbar}>
        <NavbarContent className="m-4">
          <p className="font-bold text-inherit">HappyMovies</p>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-0 mr-8" justify="center">
          <NavbarItem>
            <Link
              className={styles.nav_routes}
              color="foreground"
              to={routes.home}
            >
              Home
            </Link>
          </NavbarItem>
          {user.userLocal.login && (
            <>
              <NavbarItem>
                <Link
                  className={styles.nav_routes}
                  color="foreground"
                  to={routes.compras}
                >
                  Compras
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className={styles.nav_routes}
                  color="foreground"
                  to={routes.rentas}
                >
                  Rentas
                </Link>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex ">
            {/* Contenido para pantallas más grandes */}
            {!user.userLocal.login ? (
              <>
                <Link to={routes.login} className="">
                  <Button color="primary" variant="flat">
                    Log In
                  </Button>
                </Link>
                <Link to={routes.register}>
                  <Button color="primary" variant="flat">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button  onClick={() => navigate("/user")} color="primary" variant="flat">
                  🙍‍♂️ {user.userLocal.nombre}
                </Button>
                <Button onClick={() => logout()} color="primary" variant="flat">
                  Log out
                </Button>
              </>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
}
