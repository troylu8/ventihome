"use client";

import { useState } from "react";

type Props = {
    src: string;
};
export function EnlargableImage({ src }: Props) {
    const [enlarged, setEnlarged] = useState(false);

    return (
        <>
            <img
                src={src}
                onClick={() => setEnlarged(true)}
                width={300}
                className="hover:scale-[103%] transition-transform "
            />

            {enlarged && (
                <div
                    className={`
                        fixed top-0 bottom-0 left-0 right-0
                        bg-[#26282Ab0] z-99 
                        flex items-center justify-center
                    `}
                    onClick={() => setEnlarged(false)}
                >
                    <img src={src} className="max-w-[90%] max-h-[90%]" />
                </div>
            )}
        </>
    );
}
