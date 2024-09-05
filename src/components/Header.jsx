import React from 'react';

const Header = () => {
    return (
        <header className="bg-stone-900 ">
            <div className="font-semibold text-lg mt-10 ml-[-30px] fixed flex justify-end">
                <button type="button" className="text-white mr-2 bg-stone-900 rounded-xl py-2 px-4">
                    About Me
                </button>
                <button type="button" className="text-white mr-2 bg-stone-900 rounded-xl py-2 px-4">
                    Resume
                </button>
                <button type="button" className="text-white bg-stone-900 rounded-xl py-2 px-4">
                    Contact
                </button>
            </div>
        </header>
    );
};

export default Header;
