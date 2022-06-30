import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Calender = () => {
    const [selected] = useState(new Date());
    return (
        <div className='bg-blue-200'>
            <Header />
                <DayPicker
                    styles={{
                        caption: { color: '#A91079' },
                        head: { color: '#9900F0' }
                    }}
                    className='flex justify-center my-20 w-2/6 mx-auto py-10 rounded-2xl bg-slate-200'
                    selected={selected}
                />
            <Footer />
        </div>
    )
};

export default Calender;