export default function Logo({
  className = "",
  iconClassName = "h-[1.125em] w-[1.125em] sm:h-[1.15em] sm:w-[1.15em]",
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-1 ${className}`}
      aria-label="DealerCMS"
    >
      <img
        src="/logo-d.svg"
        alt=""
        aria-hidden="true"
        className={`relative top-[0.08em] shrink-0 ${iconClassName}`}
        width={20}
        height={21}
      />
      <span
        className="-ml-0.5 text-[1.125rem] font-bold leading-none tracking-tight text-foreground sm:text-xl"
        aria-hidden="true"
      >
        ealerCMS
      </span>
    </span>
  );
}
