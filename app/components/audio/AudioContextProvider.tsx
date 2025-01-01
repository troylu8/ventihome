import React from "react";
import AudioContextProviderClient from "./AudioContextProviderClient";

import srcs from "@/public/bgm.json";

type Props = Readonly<{
    children: React.ReactNode;
}>;
export default async function AudioContextProvider({ children }: Props) {
    return (
        <AudioContextProviderClient
            srcs={srcs.map((filename: string) => "/bgm/" + filename)}
        >
            {children}
        </AudioContextProviderClient>
    );
}
