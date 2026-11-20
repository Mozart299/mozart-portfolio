import Image from "next/image";
import styles from "./AnimatedAvatar.module.css";

/** The cartoon photo in /public/me.jpg acting out the welcome greeting: it peeks, pops up, reads along and winks. */
export function AnimatedAvatar({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`${styles.avatar} ${className}`}>
      <div className={styles.window}>
        <div className={styles.face}>
          {/* me-clean.jpg is me.jpg with the hand painted out, so the moving hand leaves no ghost. */}
          <Image src="/me-clean.jpg" alt="" fill sizes="192px" priority className="object-cover" />
          <div className={styles.hand}>
            <Image src="/me.jpg" alt="" fill sizes="192px" priority className="object-cover" />
          </div>
          <span className={`${styles.lid} ${styles.lidLeft}`} />
          <span className={`${styles.lid} ${styles.lidRight}`} />
        </div>
      </div>
      <span className={styles.iris} />
    </div>
  );
}
