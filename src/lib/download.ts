/**
 * Télécharge un fichier depuis une URL (image ou vidéo).
 * Utilise fetch + blob pour forcer le téléchargement même pour les URLs cross-origin.
 */
export async function downloadFile(url: string, filename: string): Promise<void> {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error("Erreur de chargement");
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch {
    // Fallback: ouvre dans un nouvel onglet (le navigateur proposera "Enregistrer sous")
    window.open(url, "_blank");
  }
}
