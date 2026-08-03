interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}