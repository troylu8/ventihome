import "./ui/globals.css";
import AudioContextProvider from "./components/audio/AudioContextProvider";
import FloatingAudioPlayer from "./components/audio/FloatingAudioPlayer";
import React from "react";
import { fredoka } from "./ui/fonts";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`flex justify-center overflow-y-scroll ${fredoka.className} antialiased`}
            >
                <div className="w-[80vw] max-w-[900px]">
                    <React.StrictMode>
                        <AudioContextProvider>
                            {children}
                            <FloatingAudioPlayer />
                        </AudioContextProvider>
                    </React.StrictMode>
                </div>
            </body>
        </html>
    );
}
