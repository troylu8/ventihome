import IconLink from "../components/IconLink";
import SidebarLink from "../components/SidebarLink";
import PageTitle from "../components/PageTitle";

import designs from "@/public/designs.json";

type Props = {
    children: React.ReactNode;
};
export default function DesignsLayout({ children }: Props) {
    return (
        <div className="flex m-5 gap-5">
            <PageTitle title="cheeeto / designs" />

            <div className="flex flex-col ">
                <IconLink src="/icons/home.svg" label="home" href="/" />

                <div className="flex flex-col mt-5 items-end gap-1">
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
                <h1> designs </h1>
                {children}
            </div>
        </div>
    );
}
