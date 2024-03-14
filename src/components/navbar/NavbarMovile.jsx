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
  const routesNoun = ["home", "login", "register", "user", "compras", "rentas"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={styles.navbar_movile}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">HappyM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to>Login</Link>
        </NavbarItem>
        <NavbarItem>
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
      </NavbarContent>
      <NavbarMenu>
        {routesNoun.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link  className="w-full" to={routes[item]}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        {!user.userLocal.login ?
        
        <Button onClick={()=>navigate(routes.register)} className={styles.button_logout} color="success" variant="bordered" startContent={<UserIcon/>}>
        log in
      </Button>
    
        : <Button onClick={()=>logout()} className={styles.button_logout} color="danger" variant="bordered" startContent={<UserIcon/>}>
        log out
      </Button>}
      </NavbarMenu>
    </Navbar>
  );
}
