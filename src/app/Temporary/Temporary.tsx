import Link from 'next/link';
import React from 'react';

const Temporary = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen flex-col"> {/* Added flex-col class */}
                <div className="text-5xl bg-codebotixgreen p-2 font-bold">
                    CodeBotix
                </div>
                <div className="mt-4 text-2xl font-semibold"> {/* Added margin top for spacing */}
                    We are launching soon!
                </div>
                <div className="mt-2"> {/* Added margin top for spacing */}
                    Till then please check out our work <Link className='underline font-semibold' target='blank' href={'https://linktr.ee/codebotix'}>here</Link>
                </div>
                <div>
                    Contact us: 7358278116/8122019903
                </div>
            </div>
        </div>
    );
}

export default Temporary;
