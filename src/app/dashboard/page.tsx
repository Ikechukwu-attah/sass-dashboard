import ProtectedRoute from "@/components/ProtectedRoute";
import UserTable from "@/components/UserTable";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <UserTable />
    </ProtectedRoute>
  );
}
