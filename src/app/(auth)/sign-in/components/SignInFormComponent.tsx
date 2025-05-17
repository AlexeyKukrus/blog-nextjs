'use client'
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const SignInFormComponent= () => {
  return (
    <form className="flex flex-col gap-6 p-6 bg-white rounded shadow w-full max-w-md">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">Вход</h2>
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

        <div className="flex flex-col gap-4 text-left">
          <div>
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Введите эл. почту"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Введите пароль"
              className="border rounded px-3 py-2 w-full"
            />
            <p className="text-sm text-right cursor-pointer">Забыли пароль?</p>
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="remember" className="flex items-center gap-2">
              <input  
                type="checkbox"
                id="remember"
                name="remember"
             />
                Запомнить пароль
            </label>
            <Button
              size='sm'
              variant="custom"
            >
              Войти
            </Button>
          </div>
        </div>
    </form>
  )
}

export default SignInFormComponent