import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/verbs";

function App() {
  const [verbs, setVerbs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setVerbs(data.records || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur API :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Liste des Verbes</h1>
      {loading ? (
        <p>Chargement des données...</p>
      ) : (
        <ul>
          {verbs.map((verb) => (
            <li key={verb.id}>
              <strong>{verb.fields.LU}</strong> ({verb.fields.EN} / {verb.fields.FR} / {verb.fields.DE})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
