
/*import Layout from "@/components/Layout";
import Header from '../components/layout/Header';
import Landing from "@/components/layout/Landing";
import JobTracker from "./Jobtracker/page";


export default function App({ Component, pageProps }: AppProps) {
  /* return <Component {...pageProps} />;
  return (
    <div>
      <div className="bg-white-600 w-full h-screen">
        <Landing></Landing>
        <JobTracker></JobTracker>
      </div>
    </div>


  )
}
*/
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import JobModal from "@/components/modals/jobModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <JobModal />
    </div>
  );
}
