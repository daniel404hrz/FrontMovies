import { useSelector } from "react-redux";
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

export default function Navigation() {
  const user = useSelector((state) => state.user);
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
    // dispatch(setDelUser(true));
    window.location.reload();
    navigate("/");
  };
  return (
    <Navbar className={styles.navbar}>
  <NavbarContent className="m-4">
    <p className="font-bold text-inherit">HappyMovies</p>
  </NavbarContent>
  <NavbarContent className="hidden sm:flex gap-0 mr-8" justify="center">
    <NavbarItem>
      <Link className={styles.nav_routes} color="foreground" to={routes.home} >
        Home
      </Link>
    </NavbarItem>
    {user.login && (
      <>
        <NavbarItem>
          <Link className={styles.nav_routes} color="foreground" to={routes.compras} >
            Compras
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={styles.nav_routes} color="foreground" to={routes.rentas} >
            Rentas
          </Link>
        </NavbarItem>
      </>
    )}
  </NavbarContent>

  <NavbarContent justify="end">
    <NavbarItem className="flex ">
      {/* <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10 pr-4",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500  dark:bg-default-500/20",
          background: "black",
        }}
        placeholder="Type to search..."
        size="sm"
        type="search"
      /> */}
      {!user.login ? (
        <>
          <Link to={routes.login} className="pr-4">
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
          <Link to={routes.user} className="pr-4">
            <Button color="primary" variant="flat">
              🙍‍♂️ {user.userLocal.nombre}
            </Button>
          </Link>
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
