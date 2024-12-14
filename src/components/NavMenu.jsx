"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavMenu = () => {
    const currentPathName = usePathname();
    return (
        <div className="w-5/6 mx-auto bg-slate-200">
            <ul className="flex p-5 items-center space-x-4">
                <li>
                    <Image src={`https://crud.teamrabbil.com/static/media/logo.120b5320.svg`} alt="Logo" width={96} height={96}></Image>
                </li>
                <li>
                    <Link href={"/"} className={currentPathName === "/" ? "active-link" : "pending-link"} replace prefetch={false}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/crud/load"} className={currentPathName === "/crud/load" ? "active-link" : "pending-link"} replace prefetch={false}>
                        Employee List
                    </Link>
                </li>
                <li>
                    <Link href={"/crud/insert"} className={currentPathName === "/crud/load" ? "active-link" : "pending-link"} replace prefetch={false}>
                        Create Employee
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;