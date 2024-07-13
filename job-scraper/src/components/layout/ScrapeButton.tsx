import { useJobStore } from "@/store/JobStore";

type ScrapeButtonProps = {
    input: string;
  };

function ScrapeButton({ input }: ScrapeButtonProps) {
    const setJobData = useJobStore((state) => state.setJobData);
 
    const getData = async () => {
        try {
            // Post requesti getDataan inputin kanssa
            const res = await fetch("/api/scraper/getData", {
                method: 'POST',
                body: JSON.stringify({input}),
            })
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            // tallennetaan data JobStoreen
            setJobData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <button className="flex flex-col rounded-xl bg-gray-800 p-3 text-xl font-bold text-white shadow-lg items-center"
                onClick={getData}>
                Scrape
            </button>
        </>
    );
}
export default ScrapeButton;
