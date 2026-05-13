type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>

      {description && (
        <p className="text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}