"use client";

import { useEffect, useRef } from "react";

type Props = {
    children: React.ReactNode;
};
export default function AutoSlider({ children }: Props) {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const dir = useRef(1);
    const sliding = useRef(false);
    const scrollingUntilRef = useRef(0);

    function handleMouseDown() {
        document.body.style.userSelect = "none";
        sliding.current = true;
    }
    useEffect(() => {
        function handleMouseUp() {
            document.body.style.userSelect = "auto";
            dir.current = 1;
            sliding.current = false;
            scrollingUntilRef.current = Date.now() + 2000;
        }
        function handleMouseMove(e: MouseEvent) {
            if (!sliding.current) return;

            sliderRef.current?.scrollBy({
                left: -e.movementX,
                behavior: "instant",
            });
        }

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let prevTime = 0;

        let id = requestAnimationFrame(scroll);

        scrollingUntilRef.current = Date.now() + 2000;

        function scroll(time: number) {
            if (!sliding.current && Date.now() > scrollingUntilRef.current) {
                const touchingLeftEdge = sliderRef.current?.scrollLeft == 0;
                const touchingRightEdge =
                    sliderRef.current?.scrollLeft! +
                        sliderRef.current?.clientWidth! >=
                    sliderRef.current?.scrollWidth!;

                if (
                    (dir.current == 1 && touchingRightEdge) ||
                    (dir.current == -1 && touchingLeftEdge)
                ) {
                    dir.current *= -1;
                    scrollingUntilRef.current = Date.now() + 2000;
                }

                //TODO: fix moves left at 2x speed??
                const delta =
                    dir.current == -1 ? (time - prevTime) / 2 : time - prevTime;

                sliderRef.current?.scrollBy((delta / 10) * dir.current, 0);
            }

            prevTime = time;
            id = requestAnimationFrame(scroll);
        }

        () => cancelAnimationFrame(id);
    }, []);

    return (
        <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            className="flex overflow-x-auto gap-3 [&>*]:pointer-events-none [&>*]:select-none"
        >
            {children}
        </div>
    );
}
