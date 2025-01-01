import Link from "next/link";
import IconLink from "./components/IconLink";

export default function NotFound() {
    return (
        <div
            className="
            fixed left-0 right-0 top-0 bottom-0 bg-background1
            flex flex-col justify-center items-center gap-3"
        >
            <h2>[404] page not found</h2>
            <p>this link leads nowhere</p>
            <IconLink src="/icons/home.svg" label="home" href="/" />
        </div>
    );
}
