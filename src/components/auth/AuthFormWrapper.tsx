'use client'
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

interface AuthFormWrapper {
    children: React.ReactNode,
    title: string,
}

const AuthFormWrapper = ({children, title}: AuthFormWrapper) => {  
    return (
        <div className="flex flex-col gap-6 p-6 bg-white rounded shadow w-full max-w-md">
            <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <Button
                size='lg'
                variant='outline'
                onClick={()=>{}}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size='lg'
                variant='outline'
                onClick={()=>{}}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
            <span className="flex justify-center items-center gap-4 text-gray-500 text-m">
                <span className="w-20 h-px bg-gray-300" />
                или
                <span className="w-20 h-px bg-gray-300" />
            </span>
            </div>
            {children}
        </div>
    )
}

export default AuthFormWrapper