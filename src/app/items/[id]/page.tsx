// src/app/items/[id]/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';
import styles from '../../styles/itemDetail.module.css'; // Adjust path as needed

const items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
  // Add more items as needed
];

const ItemDetail = ({ params }: { params: { id: string } }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [item, setItem] = useState<{ id: number, name: string, description: string } | null>(null);

  useEffect(() => {
    const itemId = parseInt(params.id, 10);
    const foundItem = items.find((i) => i.id === itemId);
    if (foundItem) {
      setItem(foundItem);
    } else {
      router.push('/dashboard');
    }
  }, [params.id]);

  if (!user) {
    return <p className="text-center text-red-500">You need to login to access this page.</p>;
  }

  if (!item) {
    return <p className="text-center">Item not found.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{item.name}</h1>
        <p className={styles.description}>{item.description}</p>
        <button
          onClick={() => router.push('/dashboard')}
          className={styles.button}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
