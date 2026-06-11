import { useState } from "react";

const ApiPlayground = () => {

    const [response, setResponse] = useState(null);


    const callApi = () => {

        setResponse({
            name: "Tushar Margale",
            role: "Backend Developer",
            experience: "Spring Boot Developer",
            projects: 6,
            skills: [
                "Java",
                "Spring Boot",
                "MySQL",
                "React"
            ]
        });

    }

    const clearResponse = () => {
        setResponse(null);
    }

    return (

        <section className="py-20">

            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    API <span className="text-gradient">Playground</span>
                </h2>


                <div className="
bg-[#111]
border border-white/10
rounded-xl
p-6
">


                    <div className="text-green-400 font-mono mb-4">
                        GET /api/developer/profile
                    </div>


                    <button
                        onClick={callApi}
                        className="
px-5 py-2
rounded-full
border border-primary
text-primary
font-semibold
hover:bg-primary
hover:text-black
transition-all
shadow-[0_0_15px_rgba(16,185,129,0.3)]
"
                    >
                        🚀 Send Request
                    </button>



                    {
                        response && (

                            <div className="mt-6 relative">

                                <button
                                    onClick={clearResponse}
                                    className="
                absolute
                right-3
                top-3
                px-3
                py-1
                rounded-full
                border
                border-red-400
                text-red-400
                text-sm
                hover:bg-red-400
                hover:text-black
                transition-all
                "
                                >
                                    ✕ Close
                                </button>


                                <pre className="
            bg-black
            p-5
            pt-14
            rounded-lg
            text-green-400
            overflow-auto
            border
            border-white/10
            ">

                                    {JSON.stringify(response, null, 2)}

                                </pre>

                            </div>

                        )
                    }


                </div>


            </div>

        </section>

    )
}

export default ApiPlayground;