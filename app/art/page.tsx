import EnlargableImage from "../components/enlarge/EnlargableImage";
import IconLink from "../components/IconLink";
import { readJSON } from "../../lib";

export default async function Art() {
    const srcs: string[] = await readJSON("/art.json");

    return (
        <div className="flex m-5 gap-3">
            <div className="flex flex-col">
                <IconLink src="/icons/home.svg" label="home" href="/" />
            </div>

            <div className="flex flex-col gap-3 ">
                <h1> art </h1>
                <div className="flex flex-wrap gap-3">
                    {srcs.map((src, i) => (
                        <div key={i} className={`max-w-[60vw]`}>
                            <EnlargableImage key={i} src={`/img/${src}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
