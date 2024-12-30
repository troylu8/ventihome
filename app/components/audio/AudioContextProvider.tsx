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
    src: string;
}>;

export default function AudioContextProvider({ children }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const srcsRef = useRef<string[]>([]);
    const currSrcIndexRef = useRef(0);

    useEffect(() => {
        (async () => {
            srcsRef.current = (
                await (await fetch("http://localhost:3000/bgm.json")).json()
            ).map((filename: string) => "/bgm/" + filename);

            // after retrieving srcs, set audio src to first src.
            dispatch({
                type: "edit src",
                newSrc: srcsRef.current[currSrcIndexRef.current],
            });
        })();
    }, []);

    function handleNextAudio() {
        currSrcIndexRef.current =
            (currSrcIndexRef.current + 1) % srcsRef.current.length;

        dispatch({
            type: "edit src",
            newSrc: srcsRef.current[currSrcIndexRef.current],
        });
    }

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
                    if (!audioRef.current) {
                        audioRef.current = new Audio(action.newSrc);
                        audioRef.current.addEventListener(
                            "ended",
                            handleNextAudio
                        );
                    } else {
                        if (!audioRef.current.paused) audioRef.current.pause();
                        audioRef.current.src = action.newSrc!;
                    }

                    if (!prevAudioState.paused)
                        audioRef.current?.play().catch(() => {}); // ignore play requests being aborted by pause() or new src

                    return {
                        ...prevAudioState,
                        src: action.newSrc,
                    } as AudioState;
                }
            }
        },
        { paused: true, src: srcsRef.current[0] }
    );

    return (
        <AudioContext.Provider value={[audioState, dispatch]}>
            {children}
        </AudioContext.Provider>
    );
}
