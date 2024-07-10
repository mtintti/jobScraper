
import Landing from '@/components/layout/Landing';
import InfoGrid from '@/components/layout/InfoGrid';
import Header from "@/components/layout/Header";
import Footer from '@/components/footer';

const Home = () => {
  return (
    <div className="bg-white-600 w-full h-screen">
    <Header/>
      <Landing />
      <InfoGrid />
      <Footer/>
    </div>
  );
}

export default Home;
