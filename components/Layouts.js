import Head from 'next/head'
import Link from 'next/link'
const Layout = ({ children, title = "Crypto Tracker" }) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header style={{ margin: '100px' }}>
                <Link href="/" >
                    <a style={{ fontSize: '30px' }}>
                        Crypto Tracker
                    </a>
                </Link>
            </header>
            <main>
                {children}
            </main>
        </div >
    )
}

export default Layout