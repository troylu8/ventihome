"use client";

import { useAudio } from "./AudioContextProvider";

export default function AudioPlayer() {
    const [audioState, dispatch] = useAudio()!;

    function handleTogglePlay() {
        dispatch({ type: audioState.paused ? "play" : "pause" });
    }

    return (
        <>
            <div className="flex gap-3">
                <div className="flex justify-center items-center">
                    <img
                        src={
                            audioState.paused
                                ? "/icons/play.svg"
                                : "/icons/pause.svg"
                        }
                        className="w-[40px] h-[40px] cursor-pointer"
                        onClick={handleTogglePlay}
                    />
                </div>

                <div className="flex flex-col">
                    <p className="text-xs">
                        {audioState.paused ? "(paused)" : "now playing"}
                    </p>
                    <p> {audioState.label} </p>
                </div>
            </div>
        </>
    );
}
