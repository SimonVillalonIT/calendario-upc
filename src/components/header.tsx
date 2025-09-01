"use client"

import useUser from "@/hooks/user-hook";
import { UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Navbar() {
    const {user, signOut} = useUser()
    return (
        <nav className="flex justify-between items-end mb-12 border-b border-violet-100 p-4">
            <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
            {user ? (
                <div className="flex gap-4 items-center">
                    <div className="w-fit flex gap-2 text-gray-600">
                        <UserIcon className="size-7" />
                        <p className="w-fit text-center text-nowrap text-lg">{user?.name || user.email} ({user.role})</p>
                    </div>
                    <div onClick={signOut} className="w-fit flex  text-gray-600">
                        <p className="text-gray-600 hover:text-gray-800 select-none cursor-pointer">Cerrar Sesión</p>
                    </div>
                </div>
            ) : (
                <Link href="/login" className="text-gray-600 hover:text-gray-800">
                    Iniciar Sesión
                </Link>
            )}
        </nav>
    );
}
