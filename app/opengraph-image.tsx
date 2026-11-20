import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Peter Ssendegeya, software engineer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    label: "Software Engineer",
    title: "I design and build software: web and mobile apps, payments, developer tools and distributed systems.",
  });
}
