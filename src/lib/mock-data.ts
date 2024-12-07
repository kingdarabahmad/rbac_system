import { Permission, Role, User } from "@/types";

export const mockPermissions: Permission[] = [
    { id: '1', name: 'read:users', description: 'Read users data' },
    { id: '2', name: 'write:users', description: 'Create/Update users' },
    { id: '3', name: 'delete:users', description: 'Delete users' },
    { id: '4', name: 'read:roles', description: 'Read roles data' },
    { id: '5', name: 'write:roles', description: 'Create/Update roles' },
    { id: '6', name: 'delete:roles', description: 'Delete roles' },
    { id: '7', name: 'admin:access', description: 'Full administrative access' },
]

export const mockRoles: Role[] = [
    {
        id: '1',
        name: 'Admin',
        permissions: mockPermissions,
        description: 'Full system access with administrative privileges',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Manager',
        permissions: mockPermissions.slice(0, 4),
        description: 'Can manage users and view roles',
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'User',
        permissions: [mockPermissions[0], mockPermissions[3]],
        description: 'Basic user access - can view users and roles',
        createdAt: new Date().toISOString(),
    },
];

export const mockUsers: User[] = [
    {
        id: '1',
        name: 'admin',
        email: 'admin@example.com',
        role: 'Admin',
        status: 'active',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Manager',
        status: 'active',
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Bob Wilson',
        email: 'bob@example.com',
        role: 'User',
        status: 'active',
        createdAt: new Date().toISOString(),
    },
];