import clsx from "clsx";

type Props = Readonly<{
    children: React.ReactNode;
    className?: string;
    title: string;
}>;

export default function InfoBoard({ children, className, title }: Props) {
    return (
        <>
            <div
                className={clsx(
                    "rounded-md bg-backgrounddark p-2 pt-5 relative mt-4 border-foreground border-4 border-solid",
                    className
                )}
            >
                <header
                    className="
                        absolute bg-foreground p-1 rounded-md text-nowrap text-background
                        left-[50%] top-0 translate-x-[-50%] translate-y-[-50%]
                    "
                >
                    {title}
                </header>

                {children}
            </div>
        </>
    );
}
