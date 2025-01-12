import { userAgent } from "next/server";
import { headers } from "next/headers";
import AutoSlider from "./AutoSlider";

type Props = {
    children: React.ReactNode;
};
export default async function AutoSliderParent({ children }: Props) {
    const { device } = userAgent({ headers: await headers() });

    return <AutoSlider device={device.type}>{children}</AutoSlider>;
}
