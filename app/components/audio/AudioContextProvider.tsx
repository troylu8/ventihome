"use client";

import {
    ActionDispatch,
    createContext,
    useContext,
    useReducer,
    useRef,
} from "react";

type AudioReducerPair = [AudioState, ActionDispatch<[action: Action]>];
type AudioState = {
    paused: boolean;
    label: string;
};
type Action = {
    type: "play" | "pause" | "edit label";
    newLabel?: string;
};

const AudioContext = createContext<AudioReducerPair | null>(null);

export function useAudio(): AudioReducerPair | null {
    return useContext(AudioContext);
}

type Props = Readonly<{
    children: React.ReactNode;
    src: string;
    label: string;
}>;

export default function AudioContextProvider({ children, src, label }: Props) {
    const audio = useRef(typeof window === "undefined" ? null : new Audio(src));

    const audioReducerPair = useReducer(
        (prevAudioInfo: AudioState, action: Action) => {
            switch (action.type) {
                case "play": {
                    audio.current?.play();
                    return { ...prevAudioInfo, paused: false } as AudioState;
                }
                case "pause": {
                    audio.current?.pause();
                    return { ...prevAudioInfo, paused: true } as AudioState;
                }
                case "edit label": {
                    return {
                        ...prevAudioInfo,
                        label: action.newLabel,
                    } as AudioState;
                }
            }
        },
        { paused: true, label }
    );

    return (
        <AudioContext.Provider value={audioReducerPair}>
            {children}
        </AudioContext.Provider>
    );
}
