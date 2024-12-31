import React from "react";

type Props = Readonly<{
    children: React.ReactNode;
    title: string;
}>;

export default function InfoBoard({ children, title }: Props) {
    return (
        <>
            <div className="rounded-md bg-backgrounddark p-2 pt-5 relative mt-4 border-foreground border-4 border-solid">
                <header
                    className="
                        absolute bg-foreground p-1 rounded-md text-nowrap text-background
                        left-[50%] top-0 translate-x-[-50%] translate-y-[-50%]
                    "
                >
                    {title}
                </header>

                {children}
            </div>
        </>
    );
}
