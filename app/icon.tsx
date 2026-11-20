import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const src = `data:image/jpeg;base64,${readFileSync(join(process.cwd(), "public/me.jpg")).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    <img src={src} width={64} height={64} alt="" style={{ borderRadius: 32 }} />,
    size,
  );
}
