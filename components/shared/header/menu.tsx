import { Button } from "@/components/ui/button";
import {
  EllipsisVertical,
  ShoppingCart,
  UserIcon as LucideUser,
} from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full max-w-xs gap-2">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="mr-2" /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <LucideUser className="mr-2" /> Sign In
          </Link>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 p-4">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild>
              <Link href="/cart">
                <ShoppingCart className="mr-2" /> Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <LucideUser className="mr-2" /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
