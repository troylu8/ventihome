import fs from "fs";

export const cache = new Map<string, any>();

async function read(src: string, transform: (text: string) => any) {
    
    let res = cache.get(src);

    if (res) return res;
    
    try {
        res = transform(await fs.promises.readFile(`${process.cwd()}/public/${src}`,"utf8"));
        cache.set(src, res);
        return res; 
    } catch (e: any) {
        return null;
    }
}
export async function readText(src: string) {
    return read(src, (text) => text);
}
export async function readJSON(src: string) {
    return await read(src, (text) => text? JSON.parse(text) : null);
}