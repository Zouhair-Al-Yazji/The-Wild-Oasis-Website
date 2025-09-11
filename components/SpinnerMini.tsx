export default function SpinnerMini({
  pendingLabel,
}: {
  pendingLabel?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="spinner-mini"></div>
      <span>{pendingLabel}</span>
    </div>
  );
}
