"use client";

import { useEffect, useRef } from "react";

/** autoscroll resumes `POST_DRAG_PAUSE` millis after dragging ends or slider reaches end */
const AUTOSCROLL_PAUSE = 2000;

type Props = {
    children: React.ReactNode;
    device?: string;
};
export default function AutoSlider({ children, device }: Props) {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const isDragging = useRef(false);

    const prevTouchPos = useRef<number | null>(null);

    /** do not autoscroll until this value (a time in millis) has passed  */
    const draggingUntilRef = useRef(0);

    /** current autoscroll direction: `1` or `-1` */
    const dir = useRef(1);

    /** id used for cancelAnimationFrame(id) */
    const animationIdRef = useRef(0);

    function getTouchPos(
        e:
            | MouseEvent
            | TouchEvent
            | React.MouseEvent<HTMLDivElement>
            | React.TouchEvent<HTMLDivElement>
    ) {
        return (e as MouseEvent).clientX;
    }
    function handleDragStart(
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) {
        isDragging.current = true;

        if (device === "mobile") return;

        prevTouchPos.current = getTouchPos(e);
        document.body.style.userSelect = "none";
    }
    useEffect(() => {
        /** position of slider: `0 to 1` */
        function getCurrentPos() {
            return (
                sliderRef.current!.scrollLeft /
                (sliderRef.current!.scrollWidth -
                    sliderRef.current!.clientWidth)
            );
        }
        function handleDragEnd() {
            if (!isDragging.current) return;

            document.body.style.userSelect = "auto";
            dir.current = 1;
            isDragging.current = false;
            draggingUntilRef.current = Date.now() + AUTOSCROLL_PAUSE;
        }
        function handleDrag(e: MouseEvent | TouchEvent) {
            if (device === "mobile") return;
            if (!isDragging.current) return;

            const touchPos = getTouchPos(e);
            const delta = touchPos - prevTouchPos.current!;

            prevTouchPos.current = touchPos;
            sliderRef.current?.scrollBy(-delta, 0);
        }
        window.addEventListener("mouseup", handleDragEnd);
        window.addEventListener("touchend", handleDragEnd);
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("touchmove", handleDrag);

        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = requestAnimationFrame(scroll);

        draggingUntilRef.current = Date.now() + AUTOSCROLL_PAUSE;

        let prevTime = 0;
        function scroll(time: number) {
            if (!sliderRef.current) return;
            if (!isDragging.current && Date.now() > draggingUntilRef.current) {
                let pos = getCurrentPos();

                // reverse autoscroll direction if close enough to the edges
                const THRESHOLD = 0.001;
                if (
                    (dir.current == 1 && pos > 1 - THRESHOLD) ||
                    (dir.current == -1 && pos < 0 + THRESHOLD)
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

                    pos += dir.current * (speed / scrollableWidth) * delta;

                    // dir.current * speed * delta
                    sliderRef.current?.scrollTo(pos * scrollableWidth, 0);
                }
            }

            prevTime = time;
            animationIdRef.current = requestAnimationFrame(scroll);
        }

        return () => {
            cancelAnimationFrame(animationIdRef.current);
            window.removeEventListener("mouseup", handleDragEnd);
            window.removeEventListener("touchend", handleDragEnd);
            window.removeEventListener("mousemove", handleDrag);
            window.removeEventListener("touchmove", handleDrag);
        };
    }, []);

    return (
        <div
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            className="flex overflow-x-auto gap-3 [&>*]:pointer-events-none [&>*]:select-none"
        >
            {children}
        </div>
    );
}
