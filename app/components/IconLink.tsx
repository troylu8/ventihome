"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import ColoredSvg from "./ColoredSvg";

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
                [&>*:not(p)]:hover:rotate-12 [&>*:not(p)]:transition-transform
                min-w-[75px]
            "
            href={href}
        >
            {src.endsWith(".svg") ? (
                <ColoredSvg
                    src={src}
                    width={45}
                    height={45}
                    color="var(--foreground)"
                />
            ) : (
                <Image src={src} alt="icon link" width={32} height={32} />
            )}

            <p>{label}</p>
        </Link>
    );
}
