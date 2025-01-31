import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;
const API_URL = "https://grist.skilltech.tools/api/docs/bnxws71sTCDzixcjGA6mqw/tables/LesVerbes/records";

app.use(cors());
app.use(express.json());

// Route pour récupérer les verbes depuis l'API Grist
app.get("/api/verbs", async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Erreur API :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Backend en écoute sur http://localhost:${PORT}`);
});