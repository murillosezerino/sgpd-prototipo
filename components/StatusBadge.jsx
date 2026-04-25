const STATUS_MAP = {
  success: "badge-success",
  warning: "badge-warning",
  info: "badge-info",
  error: "badge-error",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
};

export default function StatusBadge({ status, cor = "info" }) {
  const cls = STATUS_MAP[cor] || STATUS_MAP.info;
  return (
    <span className={`badge ${cls} font-semibold`}>{status}</span>
  );
}
