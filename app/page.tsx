import React from "react";

import IconLink from "./components/IconLink";
import InfoBoard from "./components/InfoBoard";
import AudioPlayer from "./components/audio/AudioPlayer";
import Image from "next/image";
import Gallery from "./components/gallery/Gallery";
import Markdown from "./components/Markdown";
import PageTitle from "./components/PageTitle";

export default function App() {
    return (
        <>
            <div className="flex flex-col m-3 gap-3">
                <PageTitle title="cheeeto" />

                {/* banner */}
                <Image
                    src="/banner.png"
                    alt="welcome banner"
                    width={900}
                    height={0}
                    className="self-center h-auto w-[100%]"
                    priority
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
                            src="/icons/character.svg"
                            label="designs"
                            href="/designs"
                        />
                    </div>

                    <div className="flex flex-col gap-3 ml-5 mr-5 ">
                        <Image
                            src="/center_image.png"
                            alt="center image"
                            width={400}
                            height={0}
                            className="h-auto"
                            priority
                        />
                        <InfoBoard
                            title="about me"
                            className="w-fit self-center"
                        >
                            <div className="flex flex-col gap-3 px-7 items-center">
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-end">
                                        <p>name :</p>
                                        <p>pronouns :</p>
                                        <p>language :</p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p>cheeeto</p>
                                        <p>she/her</p>
                                        <p>eng</p>
                                    </div>
                                </div>

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
                            src="/icons/palette.svg"
                            label="art"
                            href="/art"
                        />
                    </div>
                </div>

                {/* lower row */}
                <div className="flex gap-3">
                    <div className="min-w-[40%] p-2 overflow-auto">
                        <Markdown src="/md/bio.md" />
                    </div>

                    <div className="flex flex-col gap-3 max-w-[55%]">
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
