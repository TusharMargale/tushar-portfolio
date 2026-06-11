import { useState } from "react";


const TerminalMode = () => {


    const [open, setOpen] = useState(false);



    return (

        <>


            <button
                onClick={() => setOpen(true)}
                className="
px-5 py-2
rounded-full
border border-primary
text-primary
hover:bg-primary
hover:text-black
transition-all
"
            >
                💻 Terminal Mode
            </button>



            {
                open && (

                    <div className="
fixed inset-0
bg-black/90
z-[300]
p-10
font-mono
text-green-400
">


                        <button
                            onClick={() => setOpen(false)}
                            className="text-white mb-5"
                        >
                            close ✕
                        </button>


                        <div>

                            tushar@portfolio:~$ whoami

                            <br />

                            Backend Engineer 🚀


                            <br /><br />

                            tushar@portfolio:~$ skills

                            <br />

                            Java <br />
                            Spring Boot <br />
                            MySQL <br />
                            React


                            <br /><br />

                            tushar@portfolio:~$ projects

                            <br />

                            6 Enterprise Applications Loaded ✔


                        </div>


                    </div>


                )

            }


        </>

    )

}


export default TerminalMode;