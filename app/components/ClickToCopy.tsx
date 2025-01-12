"use client";

import React, { useState } from "react";

type Props = {
    children: React.ReactNode;
    value: string;
};
export default function ClickToCopy({ value, children }: Props) {
    const [text, setText] = useState(value);

    return (
        <div
            className="group relative "
            onClickCapture={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(value);
                setText(value + " (copied!)");
            }}
            onMouseLeave={() => setText(value)}
        >
            <p
                className="
            absolute 
            max-lg:bottom-full max-lg:left-[50%] max-lg:translate-x-[-50%]
            lg:right-full lg:top-[50%] lg:translate-y-[-50%] 

            invisible group-hover:visible
            rounded-md bg-background2 p-1 border-foreground border-2 border-solid mr-2
            text-center
            "
            >
                {text}
            </p>
            {children}
        </div>
    );
}
