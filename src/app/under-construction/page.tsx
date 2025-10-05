import '../globals.scss'

function Page() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <div className="max-w-2xl w-full">
                <div className="mb-8">
                    <span className="text-secondary text-6xl font-bold">&lt;&nbsp;&gt;</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Building Something New
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    I&apos;m currently coding something special. The project is underway and will be worth the wait!
                </p>
                <div className="bg-secondary/10 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold text-secondary mb-2">Launching Soon!</h2>
                </div>
                <p className="text-gray-700 mb-2">Want to connect?</p>
                <a className="inline-flex items-center gap-2 bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                   href="mailto:contact@example.com"
                >
                <span className="material-symbols-outlined">
                    ✉
                </span>
                    luchian58@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Page;