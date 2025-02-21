import React, { useEffect, useState } from 'react';

const NewUserCounter: React.FC = () => {
  const [newUserCount, setNewUserCount] = useState<number>(0);

  useEffect(() => {
    const visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
      localStorage.setItem('visitCount', '1');
      setNewUserCount(1);
    } else {
      const newCount = parseInt(visitCount) + 1;
      localStorage.setItem('visitCount', newCount.toString());
      setNewUserCount(newCount);
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-2">New User Visits</h2>
      <p className="text-lg">{newUserCount}</p>
    </div>
  );
};

export default NewUserCounter;