import type React from "react";

type Props = {
  href: string;
  icon: string;
  iconSize: number;
  name: string;
  date?: string;
  description: string;
  by?: string;
};

export const WorkCard: React.FC<Props> = ({
  href,
  icon,
  iconSize,
  name,
  date,
  description,
  by,
}) => {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="not-prose group my-4 flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
    >
      <img
        src={icon}
        alt=""
        aria-hidden
        className="shrink-0 w-12 h-12 rounded-xl"
        width={iconSize}
        height={iconSize}
        loading="lazy"
        decoding="async"
      />
      <span className="flex-1">
        <span className="block">
          <span className="font-bold group-hover:underline">{name}</span>
          {date && <span className="ml-2 text-xs text-gray-400">{date}</span>}
        </span>
        <span className="block">{description}</span>
        {by && (
          <span className="block mt-1 text-xs text-gray-400">by {by}</span>
        )}
      </span>
      <span
        aria-hidden
        className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
      >
        →
      </span>
    </a>
  );
};
