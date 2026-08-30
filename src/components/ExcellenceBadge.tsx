import { tierFor } from "@/lib/badges";

/**
 * The excellence badge, drawn rather than shipped as artwork.
 *
 * Vector because it has to be legible at 28px in the header and at 96px on the
 * progress page, and because the ladder is generated from the number of blocks
 * — a fixed set of images would run out the moment a block is added.
 *
 * The palette is the app's own: the amber primary for the frame and the
 * devices, a dark red field behind them. A rank of 0 is the bare frame, which
 * is what Foundations earns.
 */
export function ExcellenceBadge({
  rank,
  size = 28,
  className,
}: {
  rank: number;
  size?: number;
  className?: string;
}) {
  const tier = tierFor(rank);
  const id = `badge-${tier.rank}`;

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-frame`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7c948" />
          <stop offset="55%" stopColor="#e8a317" />
          <stop offset="100%" stopColor="#b8730c" />
        </linearGradient>
        <linearGradient id={`${id}-field`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c1512" />
          <stop offset="100%" stopColor="#2e0a08" />
        </linearGradient>
      </defs>

      {tier.winged && (
        <g fill={`url(#${id}-frame)`}>
          {/* Three swept feathers a side, tapering outward, so the wing reads
              as a wing rather than as spikes stuck to the frame. */}
          <path d="M13 22 L1 25 L13 29 Z" />
          <path d="M12 29 L0 33 L12 36 Z" />
          <path d="M13 36 L2 41 L14 43 Z" />
          <path d="M51 22 L63 25 L51 29 Z" />
          <path d="M52 29 L64 33 L52 36 Z" />
          <path d="M51 36 L62 41 L50 43 Z" />
        </g>
      )}

      {/* Hex frame, then the field it encloses. */}
      <path
        d="M32 3 L56 16 L56 44 L32 61 L8 44 L8 16 Z"
        fill={`url(#${id}-frame)`}
        stroke="#8a5408"
        strokeWidth="1"
      />
      <path d="M32 9 L51 19 L51 42 L32 55 L13 42 L13 19 Z" fill={`url(#${id}-field)`} />

      {/* Bows downward, below the device. Swept the other way it arced up
          behind the stars and was invisible. */}
      {tier.wreath && (
        <path
          d="M19 41 A15 15 0 0 0 45 41"
          fill="none"
          stroke={`url(#${id}-frame)`}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      )}

      {Array.from({ length: tier.stars }, (_, i) => {
        const spread = tier.stars === 1 ? 0 : 9;
        const cx = 32 + (i - (tier.stars - 1) / 2) * spread;
        const cy = tier.chevrons > 0 ? 23 : 30;
        const r = tier.stars === 1 && tier.winged ? 11 : 6.5;
        return <Star key={i} cx={cx} cy={cy} r={r} fill={`url(#${id}-frame)`} />;
      })}

      {Array.from({ length: tier.chevrons }, (_, i) => {
        const top = (tier.stars > 0 ? 31 : 22) + i * 5.2;
        if (top > 46) return null;
        return (
          <path
            key={i}
            d={`M21 ${top} L32 ${top + 5} L43 ${top} L43 ${top + 3} L32 ${top + 8} L21 ${top + 3} Z`}
            fill={`url(#${id}-frame)`}
          />
        );
      })}
    </svg>
  );
}

function Star({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(
      `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`,
    );
  }
  return <polygon points={points.join(" ")} fill={fill} />;
}
