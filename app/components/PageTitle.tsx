"use client";

import { useEffect } from "react";

type Props = {
    title: string;
};
export default function PageTitle({ title }: Props) {
    useEffect(() => {
        document.title = title;
    }, []);
    return <></>;
}
