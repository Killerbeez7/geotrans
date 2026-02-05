export type StepProps = {
  title: string;
  desc: string;
  number: number;
};

export default function WorkflowStep({ title, desc, number }: StepProps) {
  return (
    <div className="relative flex flex-col">
      {/* Numbered circle node */}
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-sm shadow-md">
        {number}
      </div>

      {/* Content card */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-(--text-secondary)">{desc}</p>
      </div>
    </div>
  );
}
