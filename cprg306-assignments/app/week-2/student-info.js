import Link from 'next/link';


const StudentInfo = () => {

    return (
        <div>
        <div>
        My name is Nathan Podgurny
        </div>
        <div className='hover underline'>
        <Link href="https://github.com/nathanp133/cprg306-assignments" >
        Access my GitHub
        </Link>
        </div>
        
        </div>
        );
    
}
export default StudentInfo;