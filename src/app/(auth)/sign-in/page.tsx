'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import AuthFormWrapper from "@/components/auth/AuthFormWrapper"
import * as z from 'zod'
import { LoginSchema } from "@/schemes"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AuthFormError from "@/components/auth/AuthFormError"

const SignInFormPage = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log("values", values)
  }
  return (
   <main className="min-h-screen flex items-center justify-center bg-(--color-bg) px-4">
      <AuthFormWrapper
        title='Вход'
      >
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 text-left"
          >
              <div>
                <FormField 
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Электронная почта</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Введите эл. почту"
                          type="email"
                          className="border rounded px-3 py-2 w-full"
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField 
                  control={form.control}
                  name="password"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Пароль</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Введите паполь"
                          type="password"
                          className="border rounded px-3 py-2 w-full"
                        />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>
              <AuthFormError message="Введите верный логин или пароль" />
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
          </form>
        </Form>
      </AuthFormWrapper>      
    </main>
  )
}

export default SignInFormPage