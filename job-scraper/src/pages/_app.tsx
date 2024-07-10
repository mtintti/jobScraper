
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import JobModal from "@/components/modals/jobModal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function App({ Component, pageProps }: AppProps) {
  const { data: currentUser, isLoading } = useCurrentUser();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <Component {...pageProps} />
      <JobModal currentUser={currentUser} />
      <LoginModal />
      <RegisterModal />
    </SessionProvider>
  );
}

