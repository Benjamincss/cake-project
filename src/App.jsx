import React, { useState } from 'react';

const App = () => {
  const [prenom, setPrenom] = useState('');
  const [message, setMessage] = useState('');
  const [erreur, setErreur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prenom.trim() === '') {
      setErreur('Le champ est obligatoire');
    } else {
      setMessage(`Bonjour ${prenom}`);
      setPrenom('');
      setErreur('');
    }
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <button onClick={() => alert('Connectez vous')}>Connectez vous</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
