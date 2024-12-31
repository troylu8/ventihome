import sizeOf from "image-size";
import { promisify } from "util";

import AutoSlider from "../AutoSlider";
import Image from "next/image";
import { readJSON } from "@/lib";

export default async function Gallery() {
    const srcs: string[] = (await readJSON("/art.json")).map(
        (src: string) => `/img/${src}`
    );

    const sizeOfAsync = promisify(sizeOf);

    return (
        <AutoSlider>
            {srcs.map(async (src, i) => {
                const imgSize = await sizeOfAsync(
                    `${process.cwd()}/public/${src}`
                );

                const desiredHeight = 300;
                const resultingWidth =
                    (desiredHeight * imgSize?.width!) / imgSize?.height!;

                return (
                    <Image
                        key={i}
                        src={src}
                        alt={src}
                        width={resultingWidth}
                        height={desiredHeight}
                        style={{ minWidth: resultingWidth }}
                    />
                );
            })}
        </AutoSlider>
    );
}
