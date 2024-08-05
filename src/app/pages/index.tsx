import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'; // Updated import
import Link from 'next/link';

// Sample items to be displayed
const items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
  // Add more items as needed
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Redirect to login if user is not authenticated
  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <button
        onClick={logout}
        className="mb-4 p-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id} className="mb-2">
            <Link href={`/items/${item.id}`}>
              <a className="text-blue-500 hover:underline">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
