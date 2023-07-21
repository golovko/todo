"use client";
import Link from "next/link";
import Image from "next/image";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Microsoft_To-Do_icon.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">ToDoIt</p>
      </Link>
      <div><LoginBtn/></div>
    </nav>
  );
};

export default Navbar;
