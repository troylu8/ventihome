"use client";

import { useEffect, useRef } from "react";

let c = 0;

type Props = {
    children: React.ReactNode;
};
export default function AutoSlider({ children }: Props) {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const sliding = useRef(false);
    const scrollingUntilRef = useRef(0);

    function handleDragStart() {
        document.body.style.userSelect = "none";
        sliding.current = true;
    }
    useEffect(() => {
        function handleDragEnd() {
            document.body.style.userSelect = "auto";
            dir.current = 1;
            sliding.current = false;
            scrollingUntilRef.current = Date.now() + 2000;
        }
        function handleDrag(e: MouseEvent) {
            if (!sliding.current) return;
            pos.current =
                sliderRef.current!.scrollLeft /
                (sliderRef.current!.scrollWidth -
                    sliderRef.current!.clientWidth);
            sliderRef.current?.scrollBy(-e.movementX, 0);
        }

        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("mousemove", handleDrag);

        return () => {
            window.removeEventListener("mouseup", handleDragEnd);
            window.removeEventListener("mousemove", handleDrag);
        };
    }, []);

    const dir = useRef(1);
    const pos = useRef(0);
    const animationIdRef = useRef(0);

    useEffect(() => {
        cancelAnimationFrame(animationIdRef.current);

        let prevTime = 0;

        animationIdRef.current = requestAnimationFrame(scroll);

        scrollingUntilRef.current = Date.now() + 2000;

        function scroll(time: number) {
            if (!sliding.current && Date.now() > scrollingUntilRef.current) {
                const scrollableWidth =
                    sliderRef.current!.scrollWidth -
                    sliderRef.current!.clientWidth;

                // reverse autoscroll direction if necessary
                if (
                    (dir.current == 1 && pos.current >= 1) ||
                    (dir.current == -1 && pos.current <= 0)
                ) {
                    c = 0;
                    dir.current *= -1;
                    scrollingUntilRef.current = Date.now() + 2000;
                }

                // otherwise, scroll
                else {
                    const speed = 0.05;
                    const delta = time - prevTime;

                    pos.current +=
                        dir.current * (speed / scrollableWidth) * delta;

                    sliderRef.current?.scrollTo(
                        pos.current * scrollableWidth,
                        0
                    );
                }
            }

            prevTime = time;
            animationIdRef.current = requestAnimationFrame(scroll);
        }

        return () => cancelAnimationFrame(animationIdRef.current);
    }, []);

    return (
        <div
            ref={sliderRef}
            onMouseDown={handleDragStart}
            className="flex overflow-x-auto gap-3 [&>*]:pointer-events-none [&>*]:select-none"
        >
            {children}
        </div>
    );
}
