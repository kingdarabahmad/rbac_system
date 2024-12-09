import { mockPermissions, mockRoles, mockUsers } from '@/lib/mock-data';
import { Permission, Role, User } from '@/types'
import { toast } from 'sonner';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface Store {
  users: User[];
  roles: Role[];
  permissions: Permission[];
  currentUser: User | null;
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Omit<Role, 'id' | 'createdAt'>) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
  setCurrentUser: (user: User | null) => void;


}

export const useStore = create<Store>()(
  persist(
    (set) => ({

      users: mockUsers,
      roles: mockRoles,
      permissions: mockPermissions,
      currentUser: mockUsers[0],

      setCurrentUser: (user) => set({ currentUser: user }),
      addUser: (user) => {
        set((state) => ({
          users: [
            ...state.users,
            {
              ...user,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
          ],
        }))
        toast.success('User added successfully');
      },

      updateUser: (id, updatedUser) => {
        set((state) => ({
          users: state.users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
          ),
        }))
        toast.success('User updated successfully');
      },

      deleteUser: (id) => {
        if (id === '1') {
          toast.error('Admin user cannot be deleted');
          return
        }
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        }))
        toast.success('User deleted successfully');
      },

      addRole: (role) => {
        set((state) => ({
          roles: [
            ...state.roles,
            {
              ...role,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
          ],
        }))
        toast.success('Role added successfully');
      },

      updateRole: (id, updatedRole) => {
        set((state) => ({
          roles: state.roles.map((role) =>
            role.id === id ? { ...role, ...updatedRole } : role
          ),
        }))
        toast.success('Role updated successfully');
      },

      deleteRole: (id) => {
        if (id === '1') {
          toast.error('Admin role cannot be deleted');
          return
        }
        set((state) => ({
          roles: state.roles.filter((role) => role.id !== id),
        }))
        toast.success('Role deleted successfully');
      },
    })
    , {
      name: 'auth-storage',
    }
  ),
)

