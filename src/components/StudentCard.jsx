function StudentCard(props) {
  return (
    <div className="carte-etudiant">
      <img
        src={props.photo}
        alt={`Photo de ${props.prenom}`}
      />

      <h2>Fiche étudiant</h2>

      <p>Nom : {props.nom}</p>
      <p>Prénom : {props.prenom}</p>
      <p>Email : {props.email}</p>
      <p>Téléphone : {props.telephone}</p>
      <p>Filière : {props.filiere}</p>
      <p>Année d'étude : {props.annee}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>

      <a href={`mailto:${props.email}`}>
        <button>Contacter</button>
      </a>
    </div>
  );
}

export default StudentCard;