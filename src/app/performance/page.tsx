import React from 'react'
import Header from '../components/header'
import Link from 'next/link'


const PerformancePage = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto mt-6 space-y-4">
                <h2 className="text-2xl font-bold">This is Performance Page</h2>
                <Link className="text-blue-600 underline" href="/performance/data">
                    Go to Performance Data
                </Link>
            </main>
        </div>
    )
}

export default PerformancePage