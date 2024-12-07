import { User } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';

interface UserDetailsHeaderProps {
  user: User;
}

export function UserDetailsHeader({ user }: UserDetailsHeaderProps) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="p-6">
      <div className="flex items-start gap-6">
        <Avatar className="sm:h-20 sm:w-20 h-10 w-10 ">
          <AvatarFallback className="text-lg sm:text-2xl ">{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground text-xs sm:text-lg">{user.email}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge
              variant={user.status === 'active' ? 'default' : 'secondary'}
              className="capitalize"
            >
              {user.status}
            </Badge>
            <span className="text-[10px] sm:text-sm text-muted-foreground">
              Member since {formatDate(user.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}