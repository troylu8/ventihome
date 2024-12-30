"use client";

import Link from "next/link";
import React from "react";

type Props = Readonly<{
    src: string;
    label: string;
    href: string;
}>;

export default function IconLink({ src, label, href }: Props) {
    return (
        <Link
            className="
                flex flex-col items-center justify-center cursor-pointer whitespace-nowrap
                [&>img]:hover:rotate-12 
            "
            href={href}
        >
            <img src={src} className="w-8 transition-transform" />
            <p>{label}</p>
        </Link>
    );
}
