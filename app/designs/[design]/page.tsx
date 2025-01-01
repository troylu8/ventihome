import Portrait from "@/app/components/portrait/Portrait";
import Markdown from "@/app/components/Markdown";
import NotFound from "@/app/not-found";

import designs from "@/public/designs.json";

type Props = {
    params: Promise<{ design: string }>;
};
export default async function Design({ params }: Props) {
    const { design } = await params;

    return (
        <div className="flex gap-5">
            {designs.includes(design) ? (
                <>
                    <Portrait src={`/img/${design}.png`} />
                    <Markdown src={`/md/${design}.md`} />
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
}

export async function generateStaticParams() {
    return designs.map((design: string) => ({ design }));
}
