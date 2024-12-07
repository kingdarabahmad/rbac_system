import { Permission } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface UserPermissionsListProps {
  permissions: Permission[];
}

export function UserPermissionsList({ permissions }: UserPermissionsListProps) {
  if (!permissions.length) {
    return (
      <div className="text-sm text-muted-foreground">No permissions assigned</div>
    );
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">
        Permissions
      </h3>
      <ScrollArea className="h-[120px] w-full rounded-md border p-4">
        <div className="flex flex-wrap gap-2">
          {permissions.map((permission) => (
            <div key={permission.id} className="flex flex-col gap-1">
              <Badge variant="outline">{permission.name}</Badge>
              <span className="text-xs text-muted-foreground">
                {permission.description}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}