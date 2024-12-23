"use client";

import Link from "next/link";
import React from "react";

type Props = Readonly<{
    src: string;
    label: string;
    href: string;
}>;

export default function CircleLink({ src, label, href }: Props) {
    return (
        <Link
            className="flex flex-col items-center justify-center cursor-pointer"
            href={href}
        >
            <img src={src} className="w-24 rounded-[50%]" />
            <p>{label}</p>
        </Link>
    );
}
