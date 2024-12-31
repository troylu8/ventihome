"use client";

import Image from "next/image";
import { useAudio } from "./AudioContextProvider";

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
                    <Image
                        src={
                            audioState.paused
                                ? "/icons/play.svg"
                                : "/icons/pause.svg"
                        }
                        alt="bgm play button"
                        className="cursor-pointer"
                        width={40}
                        height={40}
                        onClick={handleTogglePlay}
                    />
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
