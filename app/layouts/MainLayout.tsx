import React, { useEffect, useState } from "react"
import SideNavMain from "./includes/SideNavMain"
import TopNav from "./includes/TopNav"
import { usePathname } from "next/navigation"

export default function MainLayout({ children }: { children: React.ReactNode }) {
	const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
    setIsSSR(false);
     }, []);  

    if (isSSR) return null;

    const pathname = usePathname()

    return (
      	<>
			<TopNav/>
			<div className={`flex justify-between md:gap-20 mx-auto w-full lg:px-2.5 px-0 ${pathname == '/' ? 'max-w-[1140px]' : ''}`}>
				{children}
			</div>
      	</>
    )
}
  