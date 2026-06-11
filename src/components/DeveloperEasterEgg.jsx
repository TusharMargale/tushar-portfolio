import { useEffect } from "react";


const DeveloperEasterEgg = () => {


    useEffect(() => {


        const handle = (e) => {


            if (
                e.ctrlKey &&
                e.key === "k"
            ) {

                alert(
                    "🚀 Developer Mode Activated\n\nJava + Spring Boot + Coffee ☕"
                )

            }


        }


        window.addEventListener(
            "keydown",
            handle
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handle
            )

        }


    }, [])



    return null;

}


export default DeveloperEasterEgg;