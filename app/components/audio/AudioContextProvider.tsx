import React from "react";
import AudioContextProviderClient from "./AudioContextProviderClient";
import { readJSON } from "@/lib";

type Props = Readonly<{
    children: React.ReactNode;
}>;
export default async function AudioContextProvider({ children }: Props) {
    const srcs = (await readJSON("/bgm.json")).map(
        (filename: string) => "/bgm/" + filename
    );

    return (
        <AudioContextProviderClient srcs={srcs}>
            {children}
        </AudioContextProviderClient>
    );
}
