'use client'

// import { usePathname } from "next/navigation";

// const HIDDEN_ROUTES = ["/sign-in", "/sign-up"];

 const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  // const pathname = usePathname();
  // const hideHeader = HIDDEN_ROUTES.includes(pathname);

  return (
    <>
      {children}
    </>
  );
}

export default ClientLayout