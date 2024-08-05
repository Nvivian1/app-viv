import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
  // Add more items as needed
];

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundItem = items.find(item => item.id === Number(id));
      setItem(foundItem);
    }
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="mb-4">{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
