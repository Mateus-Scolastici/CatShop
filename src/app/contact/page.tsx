'use client'

import { useState } from 'react';
import Header from '../../components/header';

const Contact = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return(<>
        <Header setSearchTerm={setSearchTerm}/>
        <div className="w-screen h-screen pt-[80px] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[400px] h-[500px] border-4 border-black rounded-[10px]">
            <div className="flex flex-col items-center justify-start w-[390px] h-[490px] border-8 border-black rounded-[10px]">
                <div className="flex items-center justify-centerw-[370px] h-[400px] border-2 border-black rounded-[10px] mt-[5px]">
                    <textarea className="w-[350px] h-[390px] m-1 outline-0 border-none" placeholder="Text Here"></textarea>
                </div>
                <button className="w-[200px] h-[50px] mt-[10px] rounded-[20px] bg-black text-white">Sent</button>
            </div>
        </div>
        </div>
    </>)
}

export default Contact;