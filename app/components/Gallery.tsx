import React from "react";
import EnlargableImage from "./enlarge/EnlargableImage";

type Props = {
    srcs: string[];
};
export default function Gallery({ srcs }: Props) {
    return (
        <div className="flex flex-wrap gap-3">
            {srcs.map((src, i) => (
                <div key={i} className={`max-w-[60vw]`}>
                    <EnlargableImage key={i} src={src} />
                </div>
            ))}
        </div>
    );
}
