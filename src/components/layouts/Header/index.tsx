import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HashLink } from "react-router-hash-link";
import Style from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={Style.headerContainer}>
      <NavLink to={"/"}>
        <h3>bean beverage</h3>
      </NavLink>
      <NavigationMenu className={Style.NavigationMenu}>
        <NavigationMenuItem>
          <NavigationMenuTrigger>coffee-meetups</NavigationMenuTrigger>
          <NavigationMenuContent className={Style.dropdownContent}>
            <NavigationMenuLink className={Style.contentMenuLink}>
              <NavLink to={"/upcoming-meetings"}>upcoming</NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink className={Style.contentMenuLink}>
              <NavLink to={"/archived-meetings"}>archive</NavLink>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={Style.contentMenuLink}>
            <HashLink to={"/#contacts"}>contacts</HashLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={Style.contentMenuLink}>
            <HashLink to={"/#about"}>about</HashLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
