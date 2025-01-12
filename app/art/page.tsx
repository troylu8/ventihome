import Gallery from "../components/Gallery";
import IconLink from "../components/IconLink";
import PageTitle from "../components/PageTitle";

import srcs from "@/public/art.json";

export default function Art() {
    return (
        <div className="flex m-5 gap-3 justify-center">
            <PageTitle title="cheeeto / art" />

            <div className="hidden sm:flex flex-col">
                <IconLink src="/icons/home.svg" label="home" href="/" />
            </div>

            <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col">
                    <div className="flex justify-center sm:hidden">
                        <IconLink src="/icons/home.svg" label="home" href="/" />
                    </div>
                    <h1 className="text-center sm:text-start mt-3 sm:mt-0">
                        art
                    </h1>
                </div>
                <Gallery srcs={srcs.map((src) => `/img/${src}`)} />
            </div>
        </div>
    );
}
