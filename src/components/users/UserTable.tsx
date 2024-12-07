import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { UserDialog } from './UserDialog';
import { User } from '@/types';
import { Card } from '../ui/card';
import { useNavigate } from 'react-router-dom';

export function UserTable() {
  const { users, deleteUser } = useStore();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate=useNavigate();

  const handleEdit = (user: User, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedUser(user);
    setIsDialogOpen(true);
  };
  const handleDeleteUser = (userId: string,event: React.MouseEvent) => {
    event.stopPropagation();
    deleteUser(userId);
  };

  const handleRowClick = (userId: string) => {
    navigate(`/dashboard/users/${userId}`);
  };

  return (
    <>
      <Card className="rounded-md border p-4 h-[270px] overflow-y-scroll ">
        <Table className='relative'>
          <TableHeader className='sticky top-0'>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className='cursor-pointer' onClick={()=>handleRowClick(user.id)}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'active' ? 'default' : 'secondary'}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="space-x-2 flex">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(event) => handleEdit(user, event)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(event) => handleDeleteUser(user.id,event)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <UserDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        user={selectedUser}
      />
    </>
  );
}