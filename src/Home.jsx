import TypeWriter from "./TypeWriter"
import { useState } from "react"

export default function Home() {
    const roles = [
        'Designer',
        'Developer',
        'Pythonista',
        'Tech Enthusiast',
        'CyberSec Enthusiast'
    ]

    return(
        <div className="page">
            <TypeWriter words={roles} />
        </div>
    )
}