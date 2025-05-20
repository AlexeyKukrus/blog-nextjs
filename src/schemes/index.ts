import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Введите верный эл.адрес'
    }),
    password: z.string().min(1, {
        message: 'Введите верный пароль'
    }),
})

export const RegistrationSchema = z.object({
    email: z.string().email({
        message: 'Введите верный эл.адрес'
    }),
    password: z.string().min(6, {
        message: 'Введите минимум 6 символов'
    }),
    username: z.string().min(2, {
        message: 'Введите минимум 2 символа'
    }),
    retryPassword: z.string().min(6, {
        message: 'Введите минимум 6 символов'
    }),
}).refine((data) => data.password === data.retryPassword, {
    message: 'Пароли не совпадают',
    path: ['retryPassword'],
})