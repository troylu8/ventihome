import "./globals.css";
import AudioContextProvider from "./components/audio/AudioContextProvider";
import FloatingAudioPlayer from "./components/audio/FloatingAudioPlayer";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <React.StrictMode>
                    <AudioContextProvider src="/bgm/talia.mp3">
                        {children}
                        <FloatingAudioPlayer />
                    </AudioContextProvider>
                </React.StrictMode>
            </body>
        </html>
    );
}
