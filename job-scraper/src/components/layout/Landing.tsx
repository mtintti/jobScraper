const Landing = () => {
    return (
        <main className="isolate flex flex-col gap-40">
            <section className="mx-auto flex w-full max-w-screen-xl px-6 my-14 sm:mt-28 sm:h-[38rem]">
                <div className="flex-[4]">
                    <div className="flex flex-col gap-8">
                        <h1 className="col-start-1 row-start-2 max-w-[36rem] text-start text-6xl font-extrabold tracking-tight text-zinc-900 md:text-left md:text-[4.5rem] md:leading-[4.5rem] lg:text-8xl xl:max-w-[43.5rem] xl:text-8xl">
                            Simplify keeping track of your applications online
                        </h1>
                        <p className="col-start-1 row-start-3 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                            Create your personalized job tracker to organize and manage all your job applications in one place.
                        </p>
                        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-6">
                            <div className="flex w-fit flex-col place-items-center items-center justify-center">
                                <a className="group/cta flex flex-row gap-3 rounded-xl px-5 py-2 text-base font-semibold leading-8 text-black shadow-sm transition-all duration-700 ease-in-out hover:animate-gradient hover:shadow-sm hover:saturate-150 focus-visible:animate-gradient focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                    Start Your Job Tracker
                                    <span aria-hidden="true" className="transition-all duration-500 ease-in-out group-hover/cta:translate-x-1">→</span>
                                </a>
                                <p className="mt-1 h-0 text-center text-sm text-zinc-500">
                                    No credit card required
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Landing;
