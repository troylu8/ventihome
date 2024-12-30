import "./globals.css";
import AudioContextProvider from "./components/audio/AudioContextProvider";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <React.StrictMode>
                    <AudioContextProvider
                        src="/talia.mp3"
                        label="this song title"
                    >
                        {children}
                    </AudioContextProvider>
                </React.StrictMode>
            </body>
        </html>
    );
}
