import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { UserIcon } from "./UserIcon";
import { useState } from "react";

import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarMovile({ user, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routes = {
    home: "/",
    login: "/login",
    register: "/login/create",
    user: "/user",
    compras: "/compras",
    rentas: "/rentas",
  };
  const routesNoun = ["home", "compras", "rentas"];

  return (
    <Navbar isBlurred="false" className="bg-slate-400" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent isBlurred="false">
        <NavbarMenuToggle
          isBlurred="false"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={styles.navbar_movile}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">HappyM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" >
       
        <NavbarItem className="bg-slate-400">
          {user.userLocal.login ? (
            <Button
              className="mr-4"
              onClick={() => navigate("/user")}
              color="primary"
              variant="flat"
            >
              🙍‍♂️ {user.userLocal.nombre}
            </Button>
          ) : (
            <Link to={routes.login}>
              <Button color="primary" variant="flat">
                Sign Up
              </Button>
            </Link>
          )}
        </NavbarItem>
      </NavbarContent  >
      <NavbarMenu className="bg-slate-400">
        {routesNoun.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full"  to={routes[item]}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button
          onClick={() =>
            !user.userLocal.login ? navigate(routes.register) : logout()
          }
          className={styles.button_logout}
          color={!user.userLocal.login ? "success" : "danger"}
          variant="bordered"
          startContent={<UserIcon />}
        >
          {!user.userLocal.login ? "Register" : "Log Out"}
        </Button>
      </NavbarMenu>
    </Navbar>
  );
}
