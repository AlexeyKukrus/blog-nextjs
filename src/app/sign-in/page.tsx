// SignInFormPage

const SignInFormPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 bg-white max-w-100">
        <h2 className="text-4xl">Login</h2>
        <button className="w-full py-2 rounded border-(--color-darkGreen) outline">
          <span className="text-(--color-darkGreen)">Continue with Google</span>
        </button>
        <span>or</span>
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="email">
              Email
            </label>
            <input
              placeholder="Enter your email address"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              required
            />
            <p>Forgot pass?</p>
          </div>
          <div className="flex flex-row">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
              />
              <label htmlFor="remember">
                Remember me
              </label>
              
            </div>
            <button
              type="submit"
            >
              <span>Log in</span>
            </button>
          </div>
        </form>
    </div>
  )
}

export default SignInFormPage