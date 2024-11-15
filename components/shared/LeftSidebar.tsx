"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <p key={link.label}>
              <Link
                href={link.route}
                className={`leftsidebar_link ${isActive && "bg-primary-500"}`}>
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            </p>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <button onClick={() => router.push("/sign-in")}>
            <SignOutButton>
              <div className="flex cursor-pointer gap-4 p-4">
                <Image
                  src={`/assets/logout.svg`}
                  alt="logout"
                  width={24}
                  height={24}
                />
                <p className="text-light-2 max-lg:hidden">Logout</p>
              </div>
            </SignOutButton>
          </button>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
