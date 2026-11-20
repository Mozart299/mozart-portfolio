import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const src = `data:image/jpeg;base64,${readFileSync(join(process.cwd(), "public/me.jpg")).toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(<img src={src} width={180} height={180} alt="" />, size);
}
