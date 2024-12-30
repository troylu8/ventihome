import { EnlargableImage } from "../components/EnlargableImage";
import IconLink from "../components/IconLink";

export default async function Art() {
    const srcs: string[] = await (
        await fetch("http://localhost:3000/art.json")
    ).json();

    return (
        <div className="flex m-5 gap-3">
            <div className="flex flex-col">
                <IconLink src="/icons/home.svg" label="home" href="/" />
            </div>

            <div className="flex flex-col gap-3 ">
                <h1> art h1 </h1>
                <div className="flex flex-wrap gap-3">
                    {srcs.map((src, i) => (
                        <EnlargableImage key={i} src={`/img/${src}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
