import clsx from "clsx";
import {
  FaRegClock,
  FaRegFileLines,
  FaRegCircleCheck,
  FaShieldHalved,
} from "react-icons/fa6";

type TrustItem = {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const TRUST: TrustItem[] = [
  { title: "Ясни срокове", subtitle: "без изненади", Icon: FaRegClock },
  { title: "Готови документи", subtitle: "за институции", Icon: FaRegFileLines },
  { title: "Прецизност", subtitle: "всяко измерване", Icon: FaRegCircleCheck },
  { title: "Коректност", subtitle: "в комуникацията", Icon: FaShieldHalved },
];

export default function TrustBar({ className }: { className?: string }) {
  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "rounded-[--radius-card] bg-bg-nav/5",
          "border border-black/5",
          "shadow-[0_14px_50px_-46px_rgba(0,0,0,0.35)]"
        )}
      >
        <div
          className={clsx(
            "grid gap-4 p-4 sm:p-5",
            "grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {TRUST.map((t, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className={clsx(
                  "shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl",
                  "bg-bg-muted ring-1 ring-black/5",
                  "text-(--color-bg-nav)"
                )}
              >
                <t.Icon className="h-[18px] w-[18px]" />
              </div>

              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-tx-primary leading-snug">
                  {t.title}
                </div>
                <div className="mt-0.5 text-[13px] text-tx-muted leading-snug">
                  {t.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
