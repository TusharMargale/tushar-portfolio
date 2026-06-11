import { useEffect, useState } from "react";
import { FaBug, FaCode } from "react-icons/fa";

const bugsList = [
    "NullPointerException",
    "SQL Timeout Error",
    "API 500 Error",
    "Memory Leak",
    "Wrong Validation",
    "Logic Bug"
];

const CodeRunnerGame = ({ onClose }) => {

    const [score, setScore] = useState(0);
    const [bug, setBug] = useState(null);
    const [time, setTime] = useState(30);


    const generateBug = () => {
        setBug({
            name: bugsList[Math.floor(Math.random() * bugsList.length)],
            x: Math.random() * 80,
            y: Math.random() * 70
        });
    };


    useEffect(() => {

        generateBug();

        const timer = setInterval(() => {

            setTime(prev => {

                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return prev - 1;

            });

        }, 1000);


        const bugTimer = setInterval(() => {
            generateBug();
        }, 1500);


        return () => {
            clearInterval(timer);
            clearInterval(bugTimer);
        }

    }, []);



    const fixBug = () => {

        if (time > 0) {

            setScore(prev => prev + 10);
            generateBug();

        }

    }



    return (

        <div className="
fixed inset-0 z-[200]
bg-black/90
flex items-center justify-center
p-5
">


            <div className="
w-full max-w-2xl
bg-[#111]
border border-white/10
rounded-2xl
p-8
relative
">


                <button
                    onClick={onClose}
                    className="
absolute right-5 top-5
text-gray-400 hover:text-white
">
                    ✕
                </button>



                <div className="text-center mb-6">


                    <h2 className="
text-3xl font-bold text-white
flex justify-center gap-3
">

                        <FaCode className="text-primary" />

                        Code Runner

                    </h2>


                    <p className="text-gray-400 mt-2">
                        Fix bugs before production 🚀
                    </p>


                </div>



                <div className="
flex justify-between
text-white mb-5
">


                    <span>
                        🐛 Score : {score}
                    </span>


                    <span>
                        ⏱ Time : {time}s
                    </span>


                </div>




                <div className="
h-80
bg-black
rounded-xl
relative
overflow-hidden
border border-white/10
">



                    {
                        bug && time > 0 && (

                            <button

                                onClick={fixBug}

                                style={{
                                    left: `${bug.x}%`,
                                    top: `${bug.y}%`
                                }}

                                className="
absolute
text-red-400
hover:scale-125
transition
"

                            >

                                <div className="text-xs mb-1">
                                    {bug.name}
                                </div>

                                <FaBug size={35} />

                            </button>

                        )

                    }



                    {
                        time === 0 && (

                            <div className="
absolute inset-0
flex flex-col
items-center
justify-center
text-white
">


                                <h3 className="text-2xl font-bold">
                                    Game Over 🎮
                                </h3>


                                <p className="text-primary mt-2">
                                    Final Score : {score}
                                </p>


                            </div>

                        )

                    }



                </div>



            </div>


        </div>


    )
}


export default CodeRunnerGame;