import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <StudentInfo />
        </main>
    );
}

function StudentInfo() {
    return (
        <div>
            <h1>Student Information</h1>
            <p>Name: Balkaran Singh Jaswal</p>
                <p><Link href="https://github.com/BalkaranJ" style={{ color: 'blue', textDecoration: 'underline'}}>
                    Visit my Github
                </Link>
                </p>
        </div>
    )
}