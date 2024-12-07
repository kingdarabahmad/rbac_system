export interface User{
    id:string;
    name:string;
    email:string;
    role:string;
    status:'active' | 'inactive';
    createdAt:string;
}
export interface Permission{
    id:string;
    name:string;
    description:string;
}
export interface Role{
    id:string;
    name:string;
    permissions:Permission[];
    description:string;
    createdAt:string;
}

export type ActionType = 'create' | 'read' | 'update' | 'delete';