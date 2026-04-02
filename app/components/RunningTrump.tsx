"use client";

import { useState, useEffect } from "react";

const FRAME_COUNT = 7;
const FPS = 10;

export default function RunningTrump({ className = "" }: { className?: string }) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((f) => (f + 1) % FRAME_COUNT);
        }, 1000 / FPS);
        return () => clearInterval(interval);
    }, []);

    return (
        <img
            src={`/sprites/frame_${String(frame).padStart(2, "0")}.png`}
            alt="Trump running"
            className={className}
            draggable={false}
        />
    );
}
