import Portrait from "@/app/components/portrait/Portrait";
import Markdown from "@/app/components/Markdown";

type Props = {
    params: Promise<{ design: string }>;
};
export default async function Design({ params }: Props) {
    const design = (await params)["design"];

    return (
        <div className="flex gap-5">
            <Portrait src={`/img/${design}.png`} />
            <Markdown src={`/md/${design}.md`} />
        </div>
    );
}
