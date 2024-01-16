import StudentInfo from "./student-info";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-white text-black">
        <h1>Shopping List</h1>
        <div>
            <StudentInfo />
        </div>
      </main>
    );
  }