import React from 'react'
import Landing from '../../components/landing/landing'
import Navbar from '../../components/container/navbar'
import Skills from '../../components/skills/skills'
import Contact from '../../components/contact/contact'
import Projects from '../../components/projects/projects'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}
