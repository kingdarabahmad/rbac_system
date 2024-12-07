import { PropsWithChildren } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useStore } from '@/store/useStore';
import { isAdmin } from '@/lib/auth';

export function AdminRequired({ children }: PropsWithChildren) {
  const { currentUser, roles } = useStore();

  if (!isAdmin(currentUser, roles)) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          You need administrator privileges to access this section.
        </AlertDescription>
      </Alert>
    );
  }

  return <>{children}</>;
}