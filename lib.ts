import fs from "fs";

export const cache = new Map<string, any>();

export async function readText(src: string) {
    
    let res = cache.get(src);

    if (res) return res;
    
    try {
        res = await fs.promises.readFile(`${process.cwd()}/public/${src}`,"utf8");
        cache.set(src, res);
        return res; 
    } catch (e: any) {
        return null;
    }
}