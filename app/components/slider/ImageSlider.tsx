import sizeOf from "image-size";
import { promisify } from "util";

import AutoSlider from "./AutoSlider";
import Image from "next/image";

import filenames from "@/public/art.json";

export default async function ImageSlider() {
    const sizeOfAsync = promisify(sizeOf);

    return (
        <AutoSlider>
            {filenames.map(async (filename, i) => {
                const imgSize = await sizeOfAsync(
                    `${process.cwd()}/public/img/${filename}`
                );

                const desiredHeight = 300;
                const resultingWidth =
                    (desiredHeight * imgSize?.width!) / imgSize?.height!;

                return (
                    <Image
                        key={i}
                        src={`/img/${filename}`}
                        alt={filename}
                        width={resultingWidth}
                        height={desiredHeight}
                        style={{ minWidth: resultingWidth }}
                    />
                );
            })}
        </AutoSlider>
    );
}
