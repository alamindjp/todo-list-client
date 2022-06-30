import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div className='bg-blue-200 text-black'>
            <Header />
            <div class="card w-1/2 bg-neutral mx-auto mt-5">
                <div class="card-body items-center text-center">
                    <h2 className="text-3xl font-bold">Add Todo</h2>
                    <div className="form-control">
                        <input type="text" placeholder="Todo" className="input input-bordered bg-base-200" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white">Add Todo</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;