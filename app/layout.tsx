import "./globals.css";
import AudioContextProvider from "./components/audio/AudioContextProvider";
import FloatingAudioPlayer from "./components/audio/FloatingAudioPlayer";
import React from "react";
import { fredoka } from "./fonts";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body
                className={`flex justify-center overflow-y-scroll ${fredoka.className} antialiased`}
            >
                <div className="w-full max-w-[750px] ">
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
