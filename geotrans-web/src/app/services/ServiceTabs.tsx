import Link from "next/link";
import clsx from "clsx";

import { serviceCategories } from "@/config/services/categories";

export default function ServiceTabs({
  activeCategorySlug,
}: {
  activeCategorySlug?: string;
}) {
  return (
    <div className="mt-8 flex gap-3 overflow-x-auto pb-1">
      {serviceCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/services/${category.slug}`}
          className={clsx(
            "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition",
            activeCategorySlug === category.slug
              ? "border-accent bg-accent text-tx-inverse"
              : "border-br-light bg-bg-surface text-tx-primary hover:border-accent hover:text-accent"
          )}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}
