"use client";

import { useEffect, useState } from "react";

type Props = Readonly<{
    src: string;
    label: string;
}>;

const audio = new Audio();

export default function AudioPlayer({ src, label }: Props) {
    useEffect(() => {
        if (audio.src !== src) audio.src = src;

        console.log("setting src");
    }, []);

    const [playing, setPlaying] = useState(false);

    function handleTogglePlay() {
        const nextPlaying = !playing;
        setPlaying(nextPlaying);

        nextPlaying ? audio.play() : audio.pause();
    }

    return (
        <>
            <div className="flex gap-3">
                <div className="flex justify-center items-center">
                    <img
                        src={playing ? "pause.svg" : "play.svg"}
                        className="w-[40px] h-[40px] cursor-pointer"
                        onClick={handleTogglePlay}
                    />
                </div>

                <div className="flex flex-col">
                    <p className="text-xs">
                        {playing ? "now playing" : "(paused)"}
                    </p>
                    <p> {label} </p>
                </div>
            </div>
        </>
    );
}
