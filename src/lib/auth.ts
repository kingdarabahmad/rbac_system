import { User, Role } from '@/types';

export function hasPermission(user: User | null, permission: string, roles: Role[]): boolean {
  if (!user) return false;
  
  const userRole = roles.find(role => role.name === user.role);
  if (!userRole) return false;

  return userRole.permissions.some(p => p.name === permission);
}

export function isAdmin(user: User | null, roles: Role[]): boolean {
  if (!user) return false;
  return user.role === 'Admin';
}

export function requireAdmin(user: User | null, roles: Role[]): void {
  if (!isAdmin(user, roles)) {
    throw new Error('Unauthorized: Admin access required');
  }
}