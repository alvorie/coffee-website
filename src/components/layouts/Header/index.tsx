import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <header className={Style.headerContainer}>
      <h2>bean beverage</h2>
      <NavigationMenu className={Style.NavigationMenu}>
        <NavigationMenuItem>
          <NavigationMenuTrigger>coffee-meetups</NavigationMenuTrigger>
          <NavigationMenuContent className={Style.dropdownContent}>
            <NavigationMenuLink className={Style.contentMenuLink}>
              upcoming
            </NavigationMenuLink>
            <NavigationMenuLink className={Style.contentMenuLink}>
              archive
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={cn(Style.menuLink, "hover:underline")}>
            about
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={cn(Style.menuLink, "hover:underline")}>
            contacts
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  );
}
