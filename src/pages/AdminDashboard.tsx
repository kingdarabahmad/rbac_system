import { TotalUsersChart } from '@/components/charts/TotalUsersChart'
import { RoleDialog } from '@/components/roles/RoleDialog'
import { RoleTable } from '@/components/roles/RoleTable'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserDialog } from '@/components/users/UserDialog'
import { UserTable } from '@/components/users/UserTable'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Users, ShieldCheck } from 'lucide-react';
import { useState } from 'react'

const AdminDashboard = () => {
  useGSAP(() => {
    gsap.fromTo(".animate-chart-section", { y: 100 }, { y: 0, duration: 1, ease: "power2.out" })
    gsap.fromTo(".animate-main-section", { y: 150 }, { y: 0, duration: 1.5, ease: "power2.out" })
  })

  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  return (
    <div>
      <div className="animate-chart-section grid grid-cols-1 gap-3 mb-8">
        <TotalUsersChart />
      </div>

      <main className="animate-main-section grid grid-cols-1 py-1 ">

        <Tabs defaultValue="users">
          <div className="flex justify-between items-center mb-6">
            <TabsList >
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Roles
              </TabsTrigger>
            </TabsList>
            <div>
              <TabsContent value="users" className="m-0">
                <Button className='bg-[#0285da]' onClick={() => setIsUserDialogOpen(true)}>Add User</Button>
              </TabsContent>
              <TabsContent value="roles" className="m-0">
                <Button onClick={() => setIsRoleDialogOpen(true)}>Add Role</Button>
              </TabsContent>
            </div>
          </div>

          <TabsContent value="users">
            <UserTable />
          </TabsContent>
          <TabsContent value="roles">
            <RoleTable />
          </TabsContent>
        </Tabs>

        <UserDialog
          open={isUserDialogOpen}
          onOpenChange={setIsUserDialogOpen}
          user={null}
        />
        <RoleDialog
          open={isRoleDialogOpen}
          onOpenChange={setIsRoleDialogOpen}
          role={null}
        />

      </main>
    </div>
  )
}

export default AdminDashboard