import { FC, ReactNode } from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SideBarButton from '@/components/SideBarButton'
import UserCard from '@/components/UserCard'


interface LayoutProps {
  children: ReactNode
}
const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authOptions)
  // console.log(session)
  if (!session) notFound()

  function SideBarRedirect(type:string){
    switch (type) {
        case 'dashboard':
            // return <div className='align-middle'><FontAwesomeIcon icon={faHouseChimney} size="lg" /></div>
            return "/dashboard"
        case 'food':
            // return <div className='align-middle'><FontAwesomeIcon icon={faBurger} size="lg" /></div>
            return "/dashboard/food"
        case 'message':
            // return <div className='align-middle'><FontAwesomeIcon icon={faEnvelope} size="lg" /></div>
            return "/dashboard/messages"
        case 'bills':
            // return <div className='align-middle'><FontAwesomeIcon icon={faWallet} size="lg" /></div>
            return "/dashboard/bills"
        case 'settings':
            // return <div className='align-middle'><FontAwesomeIcon icon={faGears} size="lg" /></div>
            return "/dashboard/settings"
        case 'notifications':
            // return <div className='align-middle'><FontAwesomeIcon icon={faBell} size="lg" /></div>
            return "/dashboard/notifications"
        case 'support':
            // return <div className='align-middle'><FontAwesomeIcon icon={faHeadset} size="lg" /></div>
            return "/dashboard/support"
        default:
            return ""
    }
}



  return <div className='bg-secondary-custom w-full flex h-screen'>
    <div className='px-5 flex h-full w-full max-w-[15%] flex-col justify-around border-r-2'>
      <div className='flex flex-col gap-5'>
        <Link href="/dashboard" className='flex justify-center no-underline font-semibold text-2xl'>
          placeholder
        </Link>
        <div className='flex flex-col gap-1'>
          <SideBarButton text="Dashboard" isDisabled={false} type='dashboard' />
          <SideBarButton text="Food & Drinks" isDisabled={false} type='food' />
          <SideBarButton text="Messages" isDisabled={true} type='message' />
          <SideBarButton text="Bills" isDisabled={true} type='bills' />
        </div>


        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 text-sm ml-4 font-semibold'>Other</p>
          <SideBarButton text="Notifications" isDisabled={true} type='notifications' />
          <SideBarButton text="Support" isDisabled={true} type='support' />
        </div>
      </div>

      <UserCard userName={session.user.name} userImage={session.user.image} />
    </div>
    {children}

  </div>

}
export default Layout