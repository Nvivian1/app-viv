// src/app/dashboard/page.tsx
'use client';

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/dashboard.module.css'; // Adjust path as needed

const items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
  // Add more items as needed
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [data, setData] = useState(items);

  useEffect(() => {
    // Fetch data from a JSON file or an API if needed
    setData(items);
  }, []);

  if (!user) {
    return <p className="text-center text-red-500">You need to login to access the dashboard.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.welcome}>Welcome, {user}!</p>
        <ul className={styles.list}>
          {data.map(item => (
            <li key={item.id} className={styles['list-item']}>
              <Link href={`/items/${item.id}`} className={styles.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={logout}
          className={styles.button}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
