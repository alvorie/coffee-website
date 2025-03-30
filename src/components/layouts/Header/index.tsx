import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
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
              archive
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={Style.contentMenuLink}>
            contacts
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={Style.contentMenuLink}>
            about
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
