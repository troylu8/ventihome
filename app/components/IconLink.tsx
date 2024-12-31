"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

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
            <Image
                src={src}
                alt="icon link"
                width={32}
                height={32}
                className="transition-transform"
            />
            <p>{label}</p>
        </Link>
    );
}
