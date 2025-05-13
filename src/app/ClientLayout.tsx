'use client'

import { usePathname } from "next/navigation";
import Header from "./components/Header";


const HIDDEN_ROUTES = ["/sign-in", "/sign-up"];

 const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideHeader = HIDDEN_ROUTES.includes(pathname);

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
}

export default ClientLayout