import React from "react";

import CircleLink from "./components/CircleLink";
import InfoBoard from "./components/InfoBoard";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
    return (
        <>
            <div className="flex flex-col m-3 gap-3">
                {/* banner */}
                <img src="https://picsum.photos/1000/300" />

                {/* center row */}
                <div className="flex gap-3 ml-auto mr-auto">
                    <div className="flex flex-col gap-3">
                        <CircleLink
                            src="https://picsum.photos/100/100"
                            label="insta"
                            href="https://www.instagram.com/cheeetopuf"
                        />
                        <CircleLink
                            src="https://picsum.photos/100/100"
                            label="discord"
                            href="/"
                        />
                        <CircleLink
                            src="https://picsum.photos/100/100"
                            label="designs"
                            href="/"
                        />
                    </div>

                    <div className="flex flex-col gap-3 ml-5 mr-5 ">
                        <img src="https://picsum.photos/400/230" />
                        <InfoBoard title="about me">
                            <p> name: cheeeto </p>
                            <p> pronouns: she/her </p>
                            <p> name: eng </p>

                            <div className="mt-3">
                                <AudioPlayer
                                    src="talia.mp3"
                                    label="this song title"
                                />
                            </div>
                        </InfoBoard>
                    </div>

                    <div className="flex flex-col gap-3">
                        <CircleLink
                            src="https://picsum.photos/100/100"
                            label="x (twitter)"
                            href="https://x.com/CheeetoPuf"
                        />
                        <CircleLink
                            src="https://picsum.photos/100/100"
                            label="tiktok"
                            href="https://www.tiktok.com/@cheeetopuf"
                        />
                        <CircleLink
                            src="https://picsum.photos/100/100"
                            label="art"
                            href="/"
                        />
                    </div>
                </div>

                {/* lower row */}
                <div className="flex">
                    <div className="w-[40%]">bio</div>

                    <div className="flex flex-col gap-3">
                        <InfoBoard title="Notice">
                            <p> something </p>
                            <p> else </p>
                            <p> third item </p>
                        </InfoBoard>

                        <div className="flex overflow-x-auto">
                            <img
                                src="https://picsum.photos/200/200"
                                className="max-h-full"
                            />
                            <img
                                src="https://picsum.photos/200/200"
                                className="max-h-full"
                            />
                            <img
                                src="https://picsum.photos/200/200"
                                className="max-h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
