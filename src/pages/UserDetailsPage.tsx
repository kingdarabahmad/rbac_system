import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserDetailsHeader } from '@/components/users/UserDetailsHeader';
import { UserRoleManagement } from '@/components/users/UserRoleManagement';
import { AdminRequired } from '@/components/admin/AdminRequired';
import { useStore } from '@/store/useStore';

export function UserDetailsPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { users, roles } = useStore();
  
  const user = users.find((u) => u.id === userId);
  const userRole = roles.find((r) => r.name === user?.role);

  if (!user) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold mb-4">User not found</h1>
        <Button onClick={() => navigate('/dashboard')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <AdminRequired>
      <div className="p-10">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <UserDetailsHeader user={user} />

        <div className="grid gap-6 mt-6">
          <UserRoleManagement user={user} userRole={userRole} />
        </div>
      </div>
    </AdminRequired>
  );
}