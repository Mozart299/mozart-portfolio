import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { photo } from "./site";

export const ogSize = { width: 1200, height: 630 };

const photoSrc = photo
  ? `data:image/jpeg;base64,${readFileSync(join(process.cwd(), "public", photo)).toString("base64")}`
  : undefined;

export function renderOgImage({ label, title }: { label: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#143626",
          color: "#f6f1e7",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 4, textTransform: "uppercase", color: "#a8d8b8" }}>
          {label}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 64 : 80, lineHeight: 1.1, fontWeight: 700 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30 }}>
          {photoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoSrc} width={72} height={72} alt="" style={{ borderRadius: 36, border: "3px solid #f0a27a" }} />
          ) : (
            <div style={{ width: 48, height: 6, background: "#f0a27a" }} />
          )}
          Peter Ssendegeya · Uganda
        </div>
      </div>
    ),
    ogSize,
  );
}
