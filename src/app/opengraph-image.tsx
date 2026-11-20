import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          boxSizing: "border-box",
          backgroundColor: "#fff",
          backgroundImage:
            "linear-gradient(#ededed 1px, transparent 1px), linear-gradient(90deg, #ededed 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "#111",
          padding: 80,
        }}
      >
        <div style={{ position: "absolute", top: 80, left: 80, display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#111",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {site.shortName}
          </div>
          <div style={{ display: "flex", color: "#777", fontSize: 27 }}>github.com/{site.github.username}</div>
        </div>
        <div style={{ position: "absolute", left: 80, top: 300, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1.08 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 16, color: "#777", fontSize: 38 }}>{site.title}</div>
        </div>
      </div>
    ),
    size,
  );
}
