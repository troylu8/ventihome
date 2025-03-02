import React from "react";

import IconLink from "./components/IconLink";
import InfoBoard from "./components/InfoBoard";
import AudioPlayer from "./components/audio/AudioPlayer";
import Image from "next/image";
import ImageSlider from "./components/slider/ImageSlider";
import Markdown from "./components/Markdown";
import PageTitle from "./components/PageTitle";
import ClickToCopy from "./components/ClickToCopy";

export default function App() {
    return (
        <>
            <div
                className="flex flex-col m-3 gap-3"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                <PageTitle title="cheeeto" />

                {/* banner */}
                <Image
                    src="/welcomebanner.png"
                    alt="welcome banner"
                    width={900}
                    height={0}
                    className="self-center h-auto w-[100%]"
                    priority
                />

                {/* center row */}
                <div className="flex flex-col sm:flex-row gap-3 ml-auto mr-auto">
                    <div className="flex sm:flex-col gap-3 justify-evenly">
                        <IconLink
                            src="/icons/instagram.svg"
                            label="insta"
                            href="https://www.instagram.com/cheeetopuf"
                        />
                        <ClickToCopy value="cheeetopuffs">
                            <IconLink
                                src="/icons/discord.svg"
                                label="discord"
                                href="/"
                            />
                        </ClickToCopy>
                        <IconLink
                            src="/icons/character.svg"
                            label="designs"
                            href="/designs"
                        />
                    </div>

                    <Center className="hidden sm:flex" />

                    <div className="flex sm:flex-col gap-3 justify-evenly">
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

                    <Center className="flex sm:hidden" />
                </div>

                {/* lower row */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="min-w-[40%] p-2 overflow-auto">
                        <Markdown src="/md/bio.md" />
                    </div>

                    <div className="flex flex-col gap-3 sm:max-w-[55%]">
                        <InfoBoard title="notice">
                            <Markdown src="/md/notice.md" />
                        </InfoBoard>

                        <ImageSlider />
                    </div>
                </div>
            </div>
        </>
    );
}

function Center({ className }: { className?: string }) {
    return (
        <div className={"flex flex-col gap-3 ml-5 mr-5 " + className}>
            <Image
                src="/center_image.png"
                alt="center image"
                width={400}
                height={0}
                className="h-auto max-w-full"
                priority
            />
            <InfoBoard title="about me" className="w-fit self-center">
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
    );
}
