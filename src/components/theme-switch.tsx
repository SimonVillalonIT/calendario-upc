"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // useEffect para asegurar que el componente se renderice solo en el cliente
    // Esto es necesario para next-themes
    useEffect(() => {
        setMounted(true);
    }, []);

    // Sincroniza el estado del switch con el tema actual
    useEffect(() => {
        if (mounted) {
            setEnabled(theme === 'dark');
        }
    }, [theme, mounted]);

    const handleToggle = (checked: boolean) => {
        setEnabled(checked);
        setTheme(checked ? 'dark' : 'light');
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center">
            <SunIcon className="text-black dark:text-gray-300 size-7" />
            <Switch
                checked={enabled}
                onChange={handleToggle}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-800 p-1 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-offset-gray-900 focus-visible:ring-indigo-500"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
                />
            </Switch>
            <MoonIcon className="text-black size-7 dark:text-gray-300" />
        </div>
    );
}