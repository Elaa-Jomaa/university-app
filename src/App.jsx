import "./App.css";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";

import StudentCard from "./components/StudentCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const etudiants = [
    {
      nom: "Jomaa",
      prenom: "Elaa",
      email: "jomaaalaa206@gmail.com",
      telephone: "96659080",
      filiere: "Génie Logiciel",
      annee: "2ème année",
      groupe: "A2",
      ville: "Monastir",
      photo: photo1
    },
    {
      nom: "Ben Ali",
      prenom: "Sara",
      email: "sara@gmail.com",
      telephone: "22123456",
      filiere: "Informatique",
      annee: "2ème année",
      groupe: "A1",
      ville: "Sousse",
      photo: photo2
    }
  ];

  return (
    <div className="app">
      <Header />
      <Navbar />

      <h1 className="titre-liste">Liste des étudiants</h1>

      <div className="liste-etudiants">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            nom={etudiant.nom}
            prenom={etudiant.prenom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            annee={etudiant.annee}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            photo={etudiant.photo}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;