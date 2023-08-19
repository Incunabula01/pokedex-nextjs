'use client';

import Link from "next/link";


interface errorProps {
    error: Error;
    reset: () => void;
}

import styles from './error.module.scss';
 
const error = ({ error, reset }: errorProps) => {
    return (  
        <div className={`${styles['error-container']} grid min-h-full place-items-center px-6 py-20 sm:py-32 lg:px-8`}>
            <div className="text-center">
                <p className="text-base font-semi-bold">
                    There is a problem
                </p>
                <p className="mt-4 text-2xl font-bold tracking-light text-zinc">
                    {error.message || 'Something went wrong'}
                </p>
                <p className="mt-6 text-base leading-7 text-zinc-600">
                    Please try again later.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="hover:text-white font-bold py-2 px-4 rounded" onClick={reset}>
                        Try again
                    </button>
                        <Link href="/" className="bg-transparent  font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">Go Back Home</Link>
                </div>
            </div>
       </div>
    );
}
 
export default error;