import fs from "fs";

export async function readText(src: string) {
    try {
        return await fs.promises.readFile(
            `${process.cwd()}/public/${src}`,
            "utf8"
        );
    } catch (e: any) {
        return null;
    }
}
export async function readJSON(src: string) {
    const text = await readText(src);
    return text? JSON.parse(text) : null;
}