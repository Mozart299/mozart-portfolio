import { WrittenLine } from "@/components/WrittenLine";

const greeting = "Hi, I'm Peter!";
const welcome = "Welcome to my portfolio.";

export default function WelcomeGreeting() {
  return (
    <div role="status" className="grain grid min-h-svh place-items-center bg-forest px-7 py-24 text-cream">
      <span className="sr-only">{greeting} {welcome}</span>
      <div className="welcome-writing flex w-full max-w-lg flex-col items-center gap-4">
        <WrittenLine text={greeting} delay={300} pace={145} className="w-full" />
        <WrittenLine text={welcome} delay={2600} pace={95} className="w-3/4 text-warm-light" />
      </div>
    </div>
  );
}
