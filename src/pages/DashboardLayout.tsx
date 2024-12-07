import { AppSidebar } from '@/components/AppSidebar'
import { Logout } from '@/components/Logout'
import { Card,  } from '@/components/ui/card'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useStore } from '@/store/useStore'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useStore((state) => state.currentUser);
  console.log(currentUser)
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full flex flex-col m-3 gap-2'>
        <Card className='flex justify-between p-2'>

          <SidebarTrigger />
          {currentUser && <Logout user={currentUser} />}

        </Card>
        {children}
      </main>
    </SidebarProvider>

  )
}

export default DashboardLayout