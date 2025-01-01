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
                setText("copied!");
            }}
            onMouseLeave={() => setText(value)}
        >
            <p
                className="
            absolute right-full top-0 invisible group-hover:visible
            rounded-md bg-backgrounddark p-1 border-foreground border-2 border-solid mr-2
            "
            >
                {text}
            </p>
            {children}
        </div>
    );
}
