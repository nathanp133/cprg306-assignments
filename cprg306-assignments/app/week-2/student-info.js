import Link from 'next/link';


const StudentInfo = () => {

    return (
        <div>
        <div>
        My name is Nathan Podgurny
        </div>
        <div className="underline hover:underline-offset-4">
        <Link href="https://github.com/nathanp133/cprg306-assignments" >
        Access my GitHub
        </Link>
        </div>
        
        </div>
        );
    
}
export default StudentInfo;