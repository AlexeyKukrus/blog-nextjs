'use client'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface AuthFormErrorProps {
    message: string
}

const AuthFormError = ({message}: AuthFormErrorProps) => {  
    if (!message) return null
    return (
        <div 
            className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive"
        >
            <ExclamationTriangleIcon />
            <p>{message}</p>
        </div>
    )
}

export default AuthFormError