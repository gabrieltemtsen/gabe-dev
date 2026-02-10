type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-200">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

