import clsx from "clsx";

export const glassEffect =
  "bg-bg-nav/85 md:bg-bg-nav/80 backdrop-blur-xl border-white/10";

export const navLinkCls = (active: boolean) =>
  clsx(
    "nav-link text-tx-inverse",
    "relative group gap-1 px-2 py-1",
    "after:absolute after:left-1/2 after:bottom-0",

    // hover: underline
    "after:h-px after:w-full after:-translate-x-1/2",
    "after:origin-center after:scale-x-0 after:bg-accent",

    "after:transition-transform after:duration-300",
    "group-hover:after:scale-x-100",

    // active: underline
    active && "md:font-medium md:after:scale-x-100 md:after:bg-accent"
  );

export const dropdownLinkCls = (active: boolean) =>
  clsx(
    "nav-link group gap-2 px-4 py-2 whitespace-nowrap transition",
    active
      ? [
          "relative text-tx-inverse bg-white/10",
          // "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
          // "before:h-5 before:w-[2px] before:rounded-r before:bg-accent/70",
        ]
      : "text-tx-inverse/80 hover:text-tx-inverse hover:bg-bg-muted/5 "
  );

export const mobileDropdownCls = (active: boolean) =>
  clsx(
    "flex min-h-[48px] items-center px-4 py-2.5 pl-5 text-[14px] leading-snug transition-colors",
    active
      ? "border-l-accent/80 bg-white/10 font-medium text-tx-inverse"
      : "text-tx-inverse/78 hover:bg-white/8 hover:text-tx-inverse"
  );

export const mobileRowCls = (active: boolean) =>
  clsx(
    "flex w-full min-h-[56px] items-center justify-between px-6 text-base leading-none transition-all",
    active ? "font-medium text-tx-inverse" : "text-tx-inverse/75 hover:text-tx-inverse"
  );
