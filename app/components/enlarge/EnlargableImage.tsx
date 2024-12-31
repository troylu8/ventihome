import sizeOf from "image-size";
import { promisify } from "util";
import EnlargableImageClient from "./EnlargableImageClient";

type Props = {
    src: string;
};
export default async function EnlargableImage({ src }: Props) {
    const sizeOfAsync = promisify(sizeOf);
    const imgSize = await sizeOfAsync(`${process.cwd()}/public/${src}`);

    return (
        <EnlargableImageClient
            src={src}
            width={imgSize?.width!}
            height={imgSize?.height!}
        />
    );
}
