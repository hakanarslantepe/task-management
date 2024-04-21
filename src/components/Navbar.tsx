import React from "react";
import notification from "@/assets/notification.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[72px] flex items-center justify-between px-8 border-b shadow-sm">
      <Link href="/">
        <p className="text-blue-500 font-bold text-2xl">Task Management</p>
      </Link>

      <div className="flex gap-x-2 ">
        <Image
          src={notification}
          className="object-cover w-[40px] h-[40px]"
          alt="logo"
        />
        <Image
          src={notification}
          className="object-cover w-[40px] h-[40px]"
          alt="logo"
        />
        <Image
          src={notification}
          className="object-cover w-[40px] h-[40px]"
          alt="logo"
        />
        
      </div>
    </div>
  );
};

export default Navbar;
