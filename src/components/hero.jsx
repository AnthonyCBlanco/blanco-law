import React from "react"
import Banner from '../assets/skyline-la.jpg'

const Hero = () => {

    return(
    <>
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen" style={{backgroundImage: `url(${Banner})`}}>
            <div>
                <div/>
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-[#fafaf9] sm:text-6xl">
                    Representing Southern California’s Mistreated Workers
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#fafaf9]">
                    The legal team at Blanco Law group specializes in workers’
                    compensation, employment law, and personal injury
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Hero