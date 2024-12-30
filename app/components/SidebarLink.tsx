"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    href: string;
};
export default function SidebarLink({ label, href }: Props) {
    const active = usePathname() == href;

    return (
        <Link href={href} className={clsx({ "font-bold": active })}>
            <p>{label}</p>
        </Link>
    );
}
