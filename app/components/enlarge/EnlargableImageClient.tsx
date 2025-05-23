"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
    src: string;
    width: number;
    height: number;
};
export default function EnlargableImageClient({ src, width, height }: Props) {
    const [enlarged, setEnlarged] = useState(false);

    return (
        <>
            <Image
                src={src}
                alt={src}
                width={width}
                height={height}
                onClick={() => setEnlarged(true)}
                className="hover:scale-[103%] transition-transform 
                sm:max-h-[50vw]
                max-w-full w-auto h-auto"
            />

            {enlarged && (
                <div
                    className={`
                        fixed top-0 bottom-0 left-0 right-0 z-99
                    `}
                    onClick={() => setEnlarged(false)}
                >
                    <div className="fixed top-0 bottom-0 left-0 right-0 bg-background3 opacity-75 brightness-[20%]"></div>
                    <div
                        className={`
                        fixed top-[5%] bottom-[5%] left-[5%] right-[5%] 
                        flex items-center justify-center 
                    `}
                    >
                        <Image
                            src={src}
                            alt={src}
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
