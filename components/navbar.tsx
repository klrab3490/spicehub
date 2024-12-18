"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "./searchbar";
import { motion } from "framer-motion";
import NavLoginButton from "./navloginbutton";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shovel, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CompanyLogo from "@/public/Tripcrop.png";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="shadow-lg bg-blue-300"
    >
      <div className="container mx-auto px-6 py-4 text-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex flex-col items-center justify-center">
              <Image src={CompanyLogo} alt="Tricrops Logo" width={60} height={60} priority={true} style={{ width: 'auto', height: 'auto' }}/>
              <span className="text-sm font-semibold text-black">Tricrops</span>
            </Link>
          </div>
          <div className="hidden lg:block flex-1 px-40">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {pathname === "/" ? (
                <Link href="/sell" className="text-black hover:text-opacity-80 transition duration-200">
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <ShoppingBag className="h-5 w-5 text-black" />
                    <span>Become a Seller</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/buy" className="text-black hover:text-opacity-80 transition duration-200">
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Shovel className="h-5 w-5 text-black" />
                    <span>Farming Essentials</span>
                  </Button>
                </Link>
              )}
              <NavLoginButton />
            </div>

            <div className="flex md:hidden">
              <NavLoginButton />
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-black">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80 bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <nav className="flex flex-col space-y-6">
                  <Link href="/seller" className="text-black hover:text-opacity-80 transition duration-200">
                    Become a Seller
                  </Link>
                  <Link href="/buy" className="text-black hover:text-opacity-80 transition duration-200">
                    Farming Essentials
                  </Link>
                  <NavLoginButton />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
