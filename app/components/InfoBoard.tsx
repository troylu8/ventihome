import React from "react";

type Props = Readonly<{
    children: React.ReactNode;
    title: string;
}>;

export default function InfoBoard({ children, title }: Props) {
    return (
        <>
            <div className="rounded-md bg-slate-400 p-2 pt-5 relative">
                <header
                    className="
                            absolute bg-red-500 p-1 rounded-md text-nowrap
                            left-[50%] top-0 translate-x-[-50%] translate-y-[-50%]"
                >
                    {title}
                </header>

                {children}
            </div>
        </>
    );
}
