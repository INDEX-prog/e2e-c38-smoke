import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  priceType: "single" | "bundle";
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  priceType,
}: PricingCardProps): JSX.Element {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? "bg-accent/10 border-2 border-accent"
          : "bg-surface border border-muted-dark/50"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background text-xs font-semibold px-3 py-1 rounded-full">
          Best Value
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <div className="mb-6">
        <span className="font-display text-4xl font-bold text-foreground">
          {price}
        </span>
        <span className="text-muted ml-1">
          {priceType === "single" ? "one-time" : "for 5 tests"}
        </span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/intake?plan=${priceType}`}
        className={`block text-center w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          highlighted
            ? "bg-accent text-background hover:bg-accent-hover"
            : "bg-surface-light border border-muted-dark hover:border-accent text-foreground"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
