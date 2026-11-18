import React, { useEffect, useState } from "react";
import Header from "./composants/Header";
import Tache from "./composants/Tache";
import Footer from "./composants/Footer";
import AjouterTache from "./composants/AjouterTache";
import Skeleton from "./composants/Skeleton";

export default function App() {
  const [tache, setTache] = useState([
    {
      id: 1,
      nom: "Apprendre JavaScript",
      liker: false,
    },
    {
      id: 2,
      nom: "Créer une page HTML",
      liker: false,
    },
    {
      id: 3,
      nom: "Apprendre React",
      liker: false,
    },
  ]);

  // fonction liker
  const Liker = (donner) => {
    // fonctionnalité liker
    setTache((tache) =>
      tache.map((item) =>
        item.id === donner.id ? { ...item, liker: !item.liker } : item,
      ),
    );
  };

  // Fonction supprimer
  const Supprimer = (info) => {
    setTache((tache) => tache.filter((item) => item.id !== info.id));
  };

  // Ajouter Tache
  const ajouterNewTache = (nom) => {
    setTache((tache) => [
      ...tache,
      { id: tache.length + 1, nom, liker: false },
    ]);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // simuler un chargement de 2 secondes
  }, [tache]);
  const nbLiker = tache.filter((p) => p.liker).length;
  return (
    <main className="grid place-items-center h-[100vh] w-full bg-gray-200">
      <section className="bg-white h-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] rounded-md py-3 px-7">
        <Header />
        <div className="">
          <AjouterTache ajouterNewTache={ajouterNewTache} />
          {/* liste des tâches */}
          <ul className="mt-4 space-y-2 text-1xl fo\nt-bold">
            {tache.length === 0 && (
              <p className="text-center">Aucune tâche trouvée.</p>
            )}
            <div>
              {loading
                ? tache.map((p) => <Skeleton />)
                : tache.map((p) => (
                    <Tache
                      key={p.id}
                      data={p}
                      liker={Liker}
                      supprimer={Supprimer}
                    />
                  ))}
            </div>
          </ul>
        </div>
        <div>
          <Footer nbfoisLiker={nbLiker} />
        </div>
      </section>
    </main>
  );
}
