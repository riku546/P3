'use client'

import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'
import Nav from '@/components/selfMadeComponents/Nav'
import React from 'react'
import '@/app/pageLayout.css'

const page = () => {
    return (
        <div className="container">
            {/* パソコンとタブレットのときに表示される */}
            <nav className="nav">
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>

            <main className="main-area">
                <p style={{fontSize:20}}>
                    <span style={{ fontStyle: 'italic' }}>PPP</span>
                    とはProgramming Practice Platformの略です。
                    <br />
                    文字通り
                    プログラミング言語を実践的に習得するためのプラットフォームです。
                </p>
            </main>
        </div>
    )
}

export default page
