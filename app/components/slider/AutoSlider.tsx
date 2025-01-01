"use client";

import { useEffect, useRef } from "react";

/** autoscroll resumes `POST_DRAG_PAUSE` millis after dragging ends or slider reaches end */
const AUTOSCROLL_PAUSE = 2000;

type Props = {
    children: React.ReactNode;
};
export default function AutoSlider({ children }: Props) {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const isDragging = useRef(false);

    /** do not autoscroll until this value (a time in millis) has passed  */
    const draggingUntilRef = useRef(0);

    /** current autoscroll direction: `1` or `-1` */
    const dir = useRef(1);

    /** position of slider: `0 to 1` */
    const pos = useRef(0);

    /** id used for cancelAnimationFrame(id) */
    const animationIdRef = useRef(0);

    function handleDragStart() {
        document.body.style.userSelect = "none";
        isDragging.current = true;
    }
    useEffect(() => {
        function handleDragEnd() {
            if (!isDragging.current) return;

            document.body.style.userSelect = "auto";
            dir.current = 1;
            isDragging.current = false;
            draggingUntilRef.current = Date.now() + AUTOSCROLL_PAUSE;
        }
        function handleDrag(e: MouseEvent) {
            if (!isDragging.current) return;
            pos.current =
                sliderRef.current!.scrollLeft /
                (sliderRef.current!.scrollWidth -
                    sliderRef.current!.clientWidth);
            sliderRef.current?.scrollBy(-e.movementX, 0);
        }
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("mousemove", handleDrag);

        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = requestAnimationFrame(scroll);

        draggingUntilRef.current = Date.now() + AUTOSCROLL_PAUSE;

        let prevTime = 0;
        function scroll(time: number) {
            if (!isDragging.current && Date.now() > draggingUntilRef.current) {
                // reverse autoscroll direction if necessary
                if (
                    (dir.current == 1 && pos.current >= 1) ||
                    (dir.current == -1 && pos.current <= 0)
                ) {
                    dir.current *= -1;
                    draggingUntilRef.current = Date.now() + AUTOSCROLL_PAUSE;
                }

                // otherwise, scroll
                else {
                    const scrollableWidth =
                        sliderRef.current?.scrollWidth! -
                        sliderRef.current?.clientWidth!;

                    const speed = 0.05;
                    const delta = time - prevTime;

                    pos.current +=
                        dir.current * (speed / scrollableWidth) * delta;

                    // dir.current * speed * delta
                    sliderRef.current?.scrollTo(
                        pos.current * scrollableWidth,
                        0
                    );
                }
            }

            prevTime = time;
            animationIdRef.current = requestAnimationFrame(scroll);
        }

        return () => {
            cancelAnimationFrame(animationIdRef.current);
            window.removeEventListener("mouseup", handleDragEnd);
            window.removeEventListener("mousemove", handleDrag);
        };
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
