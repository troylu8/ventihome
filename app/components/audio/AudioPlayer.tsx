"use client";

import Image from "next/image";
import { useAudio } from "./AudioContextProviderClient";
import ColoredSvg from "../ColoredSvg";

const filenameWithoutExtensionRegex = /([^\\|\/]+)(?=\.[^.]*$)|([^\\|\/]+$)/;

export default function AudioPlayer() {
    const [audioState, dispatch] = useAudio()!;

    function handleTogglePlay() {
        dispatch({ type: audioState.paused ? "play" : "pause" });
    }

    return (
        <>
            <div className="flex gap-3">
                <div className="flex justify-center items-center">
                    <div className="cursor-pointer" onClick={handleTogglePlay}>
                        <ColoredSvg
                            src={
                                audioState.paused
                                    ? "/icons/play.svg"
                                    : "/icons/pause.svg"
                            }
                            width={40}
                            height={40}
                            color="var(--foreground)"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-xs">
                        {audioState.paused ? "(paused)" : "now playing"}
                    </p>
                    <p>
                        {filenameWithoutExtensionRegex.exec(audioState.src)![0]}
                    </p>
                </div>
            </div>
        </>
    );
}
