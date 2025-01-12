import "./Portrait.css";

import Image from "next/image";

const PORTRAIT_WIDTH = 250;

type Props = {
    src: string;
};
export default function Portrait({ src }: Props) {
    return (
        <Image
            src={src}
            alt="character portrait"
            width={PORTRAIT_WIDTH}
            height={0}
            style={{ animation: "slideIn 250ms ease-out" }}
            className={`max-w-full h-auto object-contain self-start`}
            priority
        />
    );
}
