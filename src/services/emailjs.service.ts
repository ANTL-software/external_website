import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_DEVIS = import.meta.env.VITE_EMAILJS_TEMPLATE_DEVIS;
const EMAILJS_TEMPLATE_CANDIDATURE = import.meta.env.VITE_EMAILJS_TEMPLATE_CANDIDATURE;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(EMAILJS_PUBLIC_KEY);

interface DevisFormData {
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
  coverLetter: File;
}

export async function sendDevisEmail(data: DevisFormData): Promise<boolean> {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_DEVIS,
      {
        to_email: 'contact@antl.fr',
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }
    );
    return response.status === 200;
  } catch (error) {
    console.error('Error sending devis email:', error);
    return false;
  }
}

export async function sendCandidatureEmail(data: CandidatureFormData): Promise<boolean> {
  try {
    const toBase64 = (file: File) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    const cvBase64 = await toBase64(data.cv);
    const coverLetterBase64 = await toBase64(data.coverLetter);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_CANDIDATURE,
      {
        to_email: 'contact@antl.fr',
        civility: data.civility,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        email: data.email,
        cv: cvBase64,
        cover_letter: coverLetterBase64,
      }
    );
    return response.status === 200;
  } catch (error) {
    console.error('Error sending candidature email:', error);
    return false;
  }
}
