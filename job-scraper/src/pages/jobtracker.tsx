import Footer from "@/components/footer";
import Board from "@/components/layout/Board";
import Header from "@/components/layout/Header";
import ScrapeButton from "@/components/layout/ScrapeButton";
import SearchInput from "@/components/layout/SearchInput";
import { useState } from "react";

const JobTracker = () => {
    const [input, setInput] = useState<string>('');
    return (
        <div>
            <Header />
            <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="col-start-1 row-start-1"> </div>
                <div className="col-start-1 row-start-2">
                    <SearchInput input={input} setInput={setInput} />
                </div>
                <div className="col-start-2 row-start-2">
                    <ScrapeButton  input={input}/>
                </div>
                <div className="col-start-2 row-start-3"></div>
            </div>
            <Board />
            <Footer />
        </div>
    );
};

export default JobTracker;
