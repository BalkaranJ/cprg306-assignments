import StudentInfo from './student-info.js';

export default function Page() {
        return (
            <main>
                <h1>Shopping List</h1>
                <StudentInfo />
                <a href="/"
                    className='text-blue-500 hover:text-blue-700'
                    >Go Back</a>
            </main>
        );
}