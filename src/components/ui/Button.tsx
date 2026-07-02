import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

const VARIANTS = {
  primary:
    "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark",
  outline:
    "border border-black/10 text-ink hover:border-brand/40 hover:text-brand",
  ghost: "text-ink hover:text-brand",
  white: "bg-white text-brand shadow-lg shadow-black/10 hover:bg-brand-50",
};

const SIZES = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}: ButtonProps | AnchorProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
