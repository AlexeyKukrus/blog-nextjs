// SignUpFormComponent

const SignUpFormComponent= () => {
  return (
    <form className="flex flex-col gap-6 p-6 bg-white rounded shadow w-full max-w-md">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold">Регистрация</h2>
          <button className="w-full py-2 rounded border-(--color-darkGreen) border">
            <span className="text-(--color-darkGreen)">Продолжить с Google</span>
          </button>
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
            <button type="submit" className="bg-(--color-darkGreen) text-white px-4 py-2 rounded">
              Зарегистрироваться
            </button>
          </div>
        </div>
    </form>
  )
}

export default SignUpFormComponent