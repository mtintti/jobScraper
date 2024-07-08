import Footer from "@/components/footer";
import Header from "@/components/layout/Header";

const About = () => {
    return (
        <div>
            <Header />
            <div className=" sm:max-w-2xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-black-300">
                <div className="col-start-1 row-start-1 max-w-[20rem] text-start text-6xl font-bold tracking-tight text-zinc-900 md:text-left md:text-[4.5rem] md:leading-[4.5rem] lg:text-8xl xl:max-w-[43.5rem] xl:text-8xl">
                    About
                </div>
                <div className="col-start-1 row-start-2 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    JobTracker is an innovative and comprehensive job tracking application designed to simplify your job search process. Our app provides an intuitive platform where users can seamlessly organize and manage their job applications, interviews, and offers, all in one place. Whether you're a fresh graduate or an experienced professional, JobTracker offers the tools you need to stay on top of your job hunt.

                </div>
                <div className="col-start-1 row-start-3 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    With JobTracker, you can easily add new job postings, track the status of your applications, and set reminders for upcoming interviews. The app categorizes your job applications into different statuses such as Applied, Interview, Offer, and Rejected, allowing you to see your progress at a glance. Our clean and user-friendly interface ensures that you can focus on your job search without getting bogged down by complexity.
                </div>
                <div className="col-start-1 row-start-4 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    JobTracker also provides insightful analytics, helping you to identify patterns in your job search and optimize your strategy. The integrated calendar feature ensures that you never miss an important deadline or interview, keeping you well-prepared and organized. With JobTracker, you can even sync your data across multiple devices, ensuring that your job search information is always at your fingertips.
                </div>
                <div className="col-start-2 row-start-2 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    Our mission is to empower job seekers with the tools they need to navigate the job market effectively. At JobTracker, we understand that job hunting can be stressful, which is why we strive to make the process as smooth and efficient as possible. We are committed to providing ongoing support and regular updates to enhance your experience.
                </div>
                <div className="col-start-2 row-start-3 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    Join the growing community of JobTracker users today and take control of your job search journey. Let JobTracker help you stay organized, focused, and one step closer to landing your dream job. With JobTracker, your next career opportunity is just a click away!
                </div>
                <div className="col-start-2 row-start-4 max-w-[20rem] text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    <a className="group/cta flex flex-row gap-3 rounded-xl px-5 py-2 text-base font-semibold leading-8 text-black shadow-sm transition-all duration-700 ease-in-out hover:animate-gradient hover:shadow-sm hover:saturate-150 focus-visible:animate-gradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        Start Your Job Tracker
                        <span aria-hidden="true" className="transition-all duration-500 ease-in-out group-hover/cta:translate-x-1">→</span>
                    </a>
                </div>
                <div className="col-start-1 row-start-5"></div>
            </div>
            <Footer />
        </div>
    );
}
export default About;