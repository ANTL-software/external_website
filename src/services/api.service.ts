import axios from 'axios';

const API_URL = import.meta.env.VITE_OLYMPE_API_URL || 'http://localhost:8800/api';

// Création d'une instance axios configurée
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

interface ContactFormData {
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface CandidatureFormData {
  civility: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cv: File;
  coverLetter: File | null;
}

/**
 * Envoie un email de contact/devis via l'API Olympe
 */
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const response = await apiClient.post('/site-vitrine/contact', {
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message
    });

    return response.data.success === true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de contact:', error);
    return false;
  }
}

/**
 * Envoie une candidature spontanée avec CV et lettre de motivation via l'API Olympe
 */
export async function sendCandidatureEmail(data: CandidatureFormData): Promise<boolean> {
  try {
    // Créer FormData pour l'upload de fichiers
    const formData = new FormData();

    // Ajouter les champs texte
    formData.append('civility', data.civility);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);

    // Ajouter les fichiers
    if (data.cv) {
      formData.append('cv', data.cv);
    }

    if (data.coverLetter) {
      formData.append('coverLetter', data.coverLetter);
    }

    const response = await apiClient.post('/site-vitrine/candidature', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data.success === true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la candidature:', error);
    return false;
  }
}

export default apiClient;
