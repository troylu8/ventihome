import { readText } from "@/lib";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    src: string;
};
export default async function Markdown({ src }: Props) {
    const text = await readText(src);

    return (
        <div className="flex flex-col gap-2">
            {text ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {text}
                </ReactMarkdown>
            ) : (
                <p>{"[nothing here] " + src}</p>
            )}
        </div>
    );
}
