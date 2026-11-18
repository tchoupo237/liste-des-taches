import React from "react";

export default function Footer({ nbfoisLiker }) {
  return (
    <div className="text-start mt-4">
      <p>
        Nombre de tâches likées : <strong>{nbfoisLiker}</strong>
      </p>
    </div>
  );
}
