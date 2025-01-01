"use client";

import { usePathname } from "next/navigation";
import AudioPlayer from "./AudioPlayer";

export default function FloatingAudioPlayer() {
    const active = usePathname() != "/"; // don't render while on the homepage

    return (
        <>
            {active && (
                <div
                    className="
                    fixed bottom-2 right-2 p-2 
                    rounded-md bg-background2 border-foreground border-4 border-solid
                "
                >
                    <AudioPlayer />
                </div>
            )}
        </>
    );
}
