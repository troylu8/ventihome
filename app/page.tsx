import React from "react";

import IconLink from "./components/IconLink";
import InfoBoard from "./components/InfoBoard";
import AudioPlayer from "./components/audio/AudioPlayer";
import AutoSlider from "./components/AutoSlider";
import Image from "next/image";
import Gallery from "./components/gallery/Gallery";

export default function App() {
    return (
        <>
            <div className="flex flex-col m-3 gap-3">
                {/* banner */}
                <Image
                    src="https://picsum.photos/1000/300"
                    alt="welcome banner"
                    width={1000}
                    height={300}
                />

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
                        <Image
                            src="https://picsum.photos/400/230"
                            alt="center image"
                            width={400}
                            height={230}
                        />
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
                    <div className="min-w-[40vw]">bio</div>

                    <div className="flex flex-col gap-3">
                        <InfoBoard title="Notice">
                            <p> something </p>
                            <p> else </p>
                            <p> third item </p>
                        </InfoBoard>

                        <Gallery />
                    </div>
                </div>
            </div>
        </>
    );
}
