import { useState } from 'react';
import { Shield, PencilIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useStore } from '@/store/useStore';
import { User, Role } from '@/types';
import { UserPermissionsList } from './UserPermissonsList';
import { isAdmin } from '@/lib/auth';

interface UserRoleManagementProps {
  user: User;
  userRole: Role | undefined;
}

export function UserRoleManagement({ user, userRole }: UserRoleManagementProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { roles, updateUser, currentUser } = useStore();
  const canEdit = isAdmin(currentUser, roles) && currentUser?.id !== user.id;

  const handleRoleChange = (newRole: string) => {
    updateUser(user.id, { role: newRole });
    setIsEditing(false);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Role & Permissions</h2>
        </div>
        {canEdit && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(!isEditing)}
          >
            <PencilIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Assigned Role
          </h3>
          {isEditing ? (
            <Select
              defaultValue={user.role}
              onValueChange={handleRoleChange}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.name}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Badge variant="secondary" className="text-base">
              {user.role}
            </Badge>
          )}
        </div>
        {userRole && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Role Description
            </h3>
            <p className="text-sm">{userRole.description}</p>
          </div>
        )}
        <UserPermissionsList
          permissions={userRole?.permissions || []}
        />
        {!canEdit && currentUser?.id === user.id && (
          <p className="text-sm text-muted-foreground mt-4">
            You cannot modify your own role and permissions
          </p>
        )}
        {!canEdit && currentUser?.id !== user.id && (
          <p className="text-sm text-muted-foreground mt-4">
            Only administrators can modify user roles and permissions
          </p>
        )}
      </div>
    </Card>
  );
}