import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <nav>
          <Link href="/persons">Personnes</Link> | 
          <Link href="/animals"> Animaux</Link>
        </nav>
      </header>

      <h1>Bienvenue sur Pet-Scanner, la plateforme vous permettant de rechercher des informations sur des animaux de compagnie et leurs propriétaires.</h1>
      <p>Sélectionnez une catégorie pour afficher les informations.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  navbar: {
    marginBottom: '20px',
    fontSize: '18px',
  },
};