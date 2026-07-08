import AppLayout from "@/components/layout/app-layout";
import StatsCard from "@/components/dashboard/stats-card";
import { dashboardStats } from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </AppLayout>
  );
}