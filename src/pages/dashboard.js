import React, { useEffect } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar/';


export default function Dashboard() {
    useEffect(() => {
        document.title = 'Instagram';
    }, []);
       
    return (
        <div className="bg-gray-200">
            <Header />
            <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-4 justify-between">
                <Timeline />
                <Sidebar />
                
            </div>
        </div>
    )
}