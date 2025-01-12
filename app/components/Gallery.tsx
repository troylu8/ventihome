import React from "react";
import EnlargableImage from "./enlarge/EnlargableImage";

type Props = {
    srcs: string[];
};
export default function Gallery({ srcs }: Props) {
    return (
        <div
            className="
        flex gap-3 mb-[50px]
        flex-col align-center
        max-w-[400px] self-center
        sm:self-start sm:flex-row sm:flex-wrap"
        >
            {srcs.map((src, i) => (
                <div key={i}>
                    <EnlargableImage key={i} src={src} />
                </div>
            ))}
        </div>
    );
}
