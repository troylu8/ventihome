import React from "react";

import IconLink from "./components/IconLink";
import InfoBoard from "./components/InfoBoard";
import AudioPlayer from "./components/audio/AudioPlayer";
import AutoSlider from "./components/AutoSlider";

export default function App() {
    return (
        <>
            <div className="flex flex-col m-3 gap-3">
                {/* banner */}
                <img src="https://picsum.photos/1000/300" />

                {/* center row */}
                <div className="flex gap-3 ml-auto mr-auto">
                    <div className="flex flex-col gap-3">
                        <IconLink
                            src="/icons/instagram.svg"
                            label="insta"
                            href="https://www.instagram.com/cheeetopuf"
                        />
                        <IconLink
                            src="/icons/discord.svg"
                            label="discord"
                            href="/"
                        />
                        <IconLink
                            src="/icons/tiktok.svg"
                            label="designs"
                            href="/designs"
                        />
                    </div>

                    <div className="flex flex-col gap-3 ml-5 mr-5 ">
                        <img src="https://picsum.photos/400/230" />
                        <InfoBoard title="about me">
                            <p> name: cheeeto </p>
                            <p> pronouns: she/her </p>
                            <p> name: eng </p>

                            <div className="mt-3">
                                <AudioPlayer />
                            </div>
                        </InfoBoard>
                    </div>

                    <div className="flex flex-col gap-3">
                        <IconLink
                            src="/icons/x.svg"
                            label="x (twitter)"
                            href="https://x.com/CheeetoPuf"
                        />
                        <IconLink
                            src="/icons/tiktok.svg"
                            label="tiktok"
                            href="https://www.tiktok.com/@cheeetopuf"
                        />
                        <IconLink
                            src="/icons/tiktok.svg"
                            label="art"
                            href="/art"
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

                        <AutoSlider>
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
                        </AutoSlider>
                    </div>
                </div>
            </div>
        </>
    );
}
