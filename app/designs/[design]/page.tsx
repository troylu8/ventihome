import Portrait from "@/app/components/portrait/Portrait";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    params: Promise<{ design: string }>;
};
export default async function Design({ params }: Props) {
    const design = (await params)["design"];

    const response = await fetch(`http://localhost:3000/md/${design}.md`);

    return (
        <div className="flex">
            <Portrait src={`/img/${design}.png`} />

            {response.ok ? (
                <div>
                    <Markdown remarkPlugins={[remarkGfm]}>
                        {await response.text()}
                    </Markdown>
                </div>
            ) : (
                <p>{"[no description here]"}</p>
            )}
        </div>
    );
}
