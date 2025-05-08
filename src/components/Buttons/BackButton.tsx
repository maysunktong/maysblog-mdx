'use client'
import { useRouter } from "next/router";

const BackButton: React.FC = () => {
  return (
    <button type="button" onClick={() => useRouter().back()}>
      back
    </button>
  );
}
export default BackButton;
