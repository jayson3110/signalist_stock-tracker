'use client'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { LogOutIcon } from "lucide-react"
import NavItems from "./NavItems"


/**
 * Render a user avatar button that opens a dropdown showing user details, a logout action, and responsive navigation items.
 *
 * @returns A React element containing the dropdown menu with the user's avatar and name as the trigger, a header with name and email, a logout menu item that navigates to the sign-in page, and a mobile-only navigation section.
 */
function UserDropdown() {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push('/sign-in');
  }

 const user = {name: 'Jayson Vo', email: "Jayson7498@clearer.io"};

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:yellow-500 transition-colors">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="md:flex flex-col items-start">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400">
            <DropdownMenuLabel>
            <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                    <span className="text-sm tex-gray-500">
                        {user.email}
                    </span>
                </div>
            </div>
            </DropdownMenuLabel>
           <DropdownMenuSeparator  className="bg-gray-600"/>
           <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
            <LogOutIcon className="h-4 w-4 mr-2 sm:block" />
            Logout
           </DropdownMenuItem>
           <DropdownMenuSeparator  className="hidden sm:block bg-gray-600"/>
           <nav className="sm:hidden">
             <NavItems />
           </nav>
        </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default UserDropdown