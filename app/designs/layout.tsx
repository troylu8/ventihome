import IconLink from "../components/IconLink";
import SidebarLink from "../components/SidebarLink";

type Props = {
    children: React.ReactNode;
};
export default async function DesignsLayout({ children }: Props) {
    const designs: string[] = await (
        await fetch("http://localhost:3000/designs.json")
    ).json();

    return (
        <div className="flex m-5 gap-3">
            <div className="flex flex-col">
                <IconLink src="/icons/home.svg" label="home" href="/" />

                <div className="flex flex-col mt-5">
                    {designs.map((design, i) => (
                        <SidebarLink
                            key={i}
                            label={design}
                            href={`/designs/${design}`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3 ">
                <h1> designs h1 </h1>
                {children}
            </div>
        </div>
    );
}
