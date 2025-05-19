'use client'

import AuthFormWrapper from "@/components/auth/AuthFormWrapper"
import { Button } from "@/components/ui/button"

const SignUpFormPage = () => {
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-(--color-bg) px-4">
      <AuthFormWrapper
        title='Регистрация'
      >
        <div>
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введите эл. посту"
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Введите имя"
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
        </div>

        <div>
          <label htmlFor="check_password"></label>
          <input
            type="password"
            id="check_password"
            name="check_password"
            placeholder="Повторно введите пароль"
            className="border rounded px-3 py-2 w-full"
          />
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
                  type='submit'
                >
                  Войти
                </Button>
              </div>
      </AuthFormWrapper>      
    </main>
  )
}

export default SignUpFormPage