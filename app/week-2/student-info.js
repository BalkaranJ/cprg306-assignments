import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h1>Name: Balkaran Singh Jaswal</h1>
            <a href="https://github.com/BalkaranJ"
             rel="noopener noreferrer"
             className="text-blue-500 hover:text-blue-700">
                My Personal Github
            </a>
        </div>
    );
};

export default StudentInfo;