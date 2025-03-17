import * as React from "react";
import { NavigationMenu } from "radix-ui";
import { HomeIcon, PersonIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  //TODO: Add Link for blog post detail
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center gap-14 text-md uppercase font-medium text-gray-800 tracking-wide">
        <NavigationMenu.Item className="flex items-start gap-4">
          <HomeIcon className="h-5 w-5" />
          <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex items-start gap-4">
          <PersonIcon className="h-5 w-5" />
          <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-3xl">
          <ArrowRightIcon className="h-5 w-5" />
          <NavigationMenu.Link href="/signin">Sign In</NavigationMenu.Link>
        </NavigationMenu.Item>
        {/*<NavigationMenu.Link href={`/${id}`}>Specific blog post content</NavigationMenu.Link>*/}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navbar;
