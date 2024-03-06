import Link from "next/link";

const LearnLinks = () => {
  const id = 2;
  return (
    <div>
      <Link href="/admin/dashboard">Go to Dashboard</Link>
      <Link href={`/users/profiles/${id}`}>Go to Dashboard</Link>
    </div>
  );
};

export default LearnLinks;
