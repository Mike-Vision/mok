"use client";

import { useEffect, useState } from "react";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+=";
const frames = 30;
const frameDuration = 55;

export function EncryptedWord({
  text,
  active,
  delay = 0,
  replay = 0,
  reducedMotion,
}: {
  text: string;
  active: boolean;
  delay?: number;
  replay?: number;
  reducedMotion: boolean;
}) {
  const [display, setDisplay] = useState(text);
  const [decoding, setDecoding] = useState(false);

  useEffect(() => {
    if (!active || reducedMotion) {
      if (reducedMotion) {
        const reset = window.requestAnimationFrame(() => {
          setDisplay(text);
          setDecoding(false);
        });
        return () => window.cancelAnimationFrame(reset);
      }
      return;
    }

    let interval = 0;
    const start = window.setTimeout(() => {
      setDecoding(true);
      let frame = 0;
      interval = window.setInterval(() => {
        frame += 1;
        const resolved = Math.floor((frame / frames) * text.length);
        const next = Array.from(text, (character, index) => {
          if (character === " " || index < resolved) return character;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join("");
        setDisplay(frame >= frames ? text : next);
        if (frame >= frames) {
          window.clearInterval(interval);
          setDecoding(false);
        }
      }, frameDuration);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [active, delay, reducedMotion, replay, text]);

  return (
    <span aria-hidden className="encrypted-word inline-block whitespace-nowrap" data-decoding={decoding || undefined}>
      {display}
    </span>
  );
}
