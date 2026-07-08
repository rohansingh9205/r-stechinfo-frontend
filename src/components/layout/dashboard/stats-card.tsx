type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <p
        style={{
          color: "#64748b",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {value}
      </h2>
    </div>
  );
}