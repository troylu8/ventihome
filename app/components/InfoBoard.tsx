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
                    "rounded-md bg-background2 p-2 pt-5 relative mt-4 border-foreground border-4 border-solid",
                    className
                )}
            >
                <header
                    className="
                        absolute bg-foreground px-2 rounded-md text-nowrap text-background1 text-xl
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
