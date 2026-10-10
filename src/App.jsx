import photo from"./assets/photo.jpeg"
import  './App.css'
function App() {
  const nom = "Jomaa";
  const prenom = "Elaa";
  const email = "jomaaalaa206@gmail.com";
  const telephone = "96659080";
  const filiere = "Génie Logiciel";
  const annee = "2ème année";
  const groupe = "A2";
  const ville = "monastir";


// const etudiant = {
//   nom:"",
//   prenom:""
// }
  return (
    <div>
      <h1>Fiche Étudiant</h1>
      <h2>Informations personnelles</h2>
      <img src={photo} alt="photo de l'étudiant"/>
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Email : {email}</p>
      <p>Téléphone : {telephone}</p>
      <p>Filière : {filiere}</p>
      <p>Année d'étude : {annee}</p>
      <p>Groupe : {groupe}</p>
      <p>Ville : {ville}</p>
      <a href="mailto:jomaaalaa206@gmail.com">
        <button>Contacter</button></a>
    </div>
  );
}

export default App;
