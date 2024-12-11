import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await fetch('http://localhost:3001/animals');
      const data = await res.json();
      setAnimals(data);
    };
    fetchAnimals();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <Link href="/">Accueil</