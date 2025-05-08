'use client';

import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      ← Back
    </button>
  );
};

export default BackButton;
