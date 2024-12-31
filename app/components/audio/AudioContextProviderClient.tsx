"use client";

import {
    ActionDispatch,
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef,
} from "react";

type AudioReducerPair = [AudioState, ActionDispatch<[action: Action]>];
type AudioState = {
    paused: boolean;
    src: string;
};
type Action = {
    type: "play" | "pause" | "edit src";
    newSrc?: string;
};

const AudioContext = createContext<AudioReducerPair | null>(null);

export function useAudio(): AudioReducerPair | null {
    return useContext(AudioContext);
}

type Props = Readonly<{
    children: React.ReactNode;
    srcs: string[];
}>;

export default function AudioContextProviderClient({ children, srcs }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(
        typeof window !== "undefined" ? new Audio(srcs[0]) : null
    );
    const currSrcIndexRef = useRef(0);

    function handleNextAudio() {
        currSrcIndexRef.current = (currSrcIndexRef.current + 1) % srcs.length;

        dispatch({
            type: "edit src",
            newSrc: srcs[currSrcIndexRef.current],
        });
    }
    useEffect(() => {
        audioRef.current?.addEventListener("ended", handleNextAudio);

        return () =>
            audioRef.current?.removeEventListener("ended", handleNextAudio);
    }, []);

    const [audioState, dispatch] = useReducer(
        (prevAudioState: AudioState, action: Action) => {
            switch (action.type) {
                case "play": {
                    audioRef.current?.play();
                    return { ...prevAudioState, paused: false } as AudioState;
                }
                case "pause": {
                    audioRef.current?.pause();
                    return { ...prevAudioState, paused: true } as AudioState;
                }
                case "edit src": {
                    if (!audioRef.current?.paused) audioRef.current?.pause();
                    audioRef.current!.src = action.newSrc!;

                    if (!prevAudioState.paused)
                        audioRef.current?.play().catch(() => {}); // ignore play requests being aborted by pause() or new src

                    return {
                        ...prevAudioState,
                        src: action.newSrc,
                    } as AudioState;
                }
            }
        },
        { paused: true, src: srcs[0] }
    );

    return (
        <AudioContext.Provider value={[audioState, dispatch]}>
            {children}
        </AudioContext.Provider>
    );
}
