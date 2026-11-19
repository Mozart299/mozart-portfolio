import Link from "next/link";
import { Print } from "./Print";
import { Label } from "./SectionHead";
import { projects } from "@/lib/projects";

/*
 * Desktop positions for up to 8 prints inside a ~1150px × 900px stage.
 * dx/dy move each print to the centre at the start of the spread animation.
 */
const spots = [
  { left: "3%", top: 40, r: -6 },
  { left: "29%", top: 0, r: 4 },
  { left: "60%", top: 30, r: -3 },
  { left: "80%", top: 250, r: 6 },
  { left: "0%", top: 330, r: 3 },
  { left: "8%", top: 630, r: -4 },
  { left: "40%", top: 680, r: 3 },
  { left: "72%", top: 610, r: -5 },
];
const STAGE_W = 1150;
const STAGE_H = 900;
const PRINT_W = 220;

function Intro() {
  return (
    <div className="text-center max-w-md mx-auto">
      <Label>Selected work · {projects.length} projects</Label>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05] text-ink">
        Real websites and apps, live today.
      </h2>
      <p className="mt-4 text-muted">Tap any picture to open the real site.</p>
      <Link href="/projects" className="mt-7 inline-flex px-6 py-3.5 rounded-full bg-ink text-cream font-medium hover:bg-accent transition-colors">
        See all projects <span aria-hidden>&nbsp;→</span>
      </Link>
    </div>
  );
}

export function WorkCollage() {
  const items = projects.slice(0, spots.length);
  return (
    <section className="collage max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-36">
      {/* Phones and small tablets: a tidy grid of prints */}
      <div className="md:hidden">
        <Intro />
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6">
          {items.map((p, i) => (
            <div key={p.id} style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}>
              <Print project={p} n={i + 1} sizes="50vw" />
            </div>
          ))}
        </div>
      </div>

      {/* Larger screens: scattered prints around the intro */}
      <div className="hidden md:block relative mx-auto" style={{ maxWidth: STAGE_W, height: STAGE_H }}>
        <div className="absolute inset-x-0 top-[330px] z-10 px-[24%]">
          <Intro />
        </div>
        {items.map((p, i) => {
          const s = spots[i];
          const leftPx = (parseFloat(s.left) / 100) * STAGE_W;
          const style = {
            left: s.left,
            top: s.top,
            width: PRINT_W,
            "--r": `${s.r}deg`,
            "--dx": `${STAGE_W / 2 - leftPx - PRINT_W / 2}px`,
            "--dy": `${STAGE_H / 2 - s.top - 100}px`,
          } as React.CSSProperties;
          return (
            <div key={p.id} className="collage-print absolute hover:z-20" style={style}>
              <Print project={p} n={i + 1} sizes={`${PRINT_W}px`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
