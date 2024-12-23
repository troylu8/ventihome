import React from "react";

import CircleLink from "./components/CircleLink";
import InfoBoard from "./components/InfoBoard";

export default function App() {
    return (
        <>
            <div className="flex flex-col">
                <img src="https://picsum.photos/1000/300" />

                <div className="flex">
                    <div className="flex flex-col">
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

                    <div className="flex flex-col ">
                        <img src="https://picsum.photos/600/350" />
                        <InfoBoard title="about me">
                            <p> name: cheeeto </p>
                            <p> pronouns: she/her </p>
                            <p> name: eng </p>
                        </InfoBoard>
                    </div>

                    <div className="flex flex-col">
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

                <div className="flex">
                    <div className="w-[40%]">bio</div>

                    <div className="flex flex-col">
                        <InfoBoard title="Notice">
                            <p> something </p>
                            <p> else </p>
                            <p> third item </p>
                        </InfoBoard>

                        <div className="flex overflow-x-scroll">
                            <img src="https://picsum.photos/200/200" />
                            <img src="https://picsum.photos/200/200" />
                            <img src="https://picsum.photos/200/200" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
