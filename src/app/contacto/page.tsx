'use client';

import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    companySize: '',
    stage: '',
    supportNeeded: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Basic validation (can be improved)
    if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        alert('Por favor, completa los campos obligatorios: Nombre, Email y Mensaje.');
        return;
    }

    try {
      // TODO: Replace with actual API call in the next steps
      console.log('Form data submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', sector: '', companySize: '', stage: '', supportNeeded: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Contacto / Inscripción</h1>
        <p className="text-text-secondary mb-8 max-w-2xl">
          ¿Tienes dudas? ¿Necesitas orientación para formar un sindicato en tu empresa? ¿O simplemente quieres dejarnos un mensaje? Completa el siguiente formulario y nos pondremos en contacto contigo.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Nombre Completo <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Correo Electrónico <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">Teléfono (Opcional)</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
             <div>
              <label htmlFor="sector" className="block text-sm font-medium text-text-primary mb-1">Sector Económico (Opcional)</label>
              <input type="text" id="sector" name="sector" value={formData.sector} onChange={handleChange} placeholder="Ej: Comercio, Minería, Educación" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-text-primary mb-1">Tamaño Empresa (Opcional)</label>
              <select id="companySize" name="companySize" value={formData.companySize} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white">
                <option value="">Selecciona...</option>
                <option value="small">Pequeña (1-50 trabajadores)</option>
                <option value="medium">Mediana (51-200 trabajadores)</option>
                <option value="large">Grande (+200 trabajadores)</option>
                <option value="unknown">No lo sé</option>
              </select>
            </div>
             <div>
              <label htmlFor="stage" className="block text-sm font-medium text-text-primary mb-1">Etapa del Proceso (Opcional)</label>
               <input type="text" id="stage" name="stage" value={formData.stage} onChange={handleChange} placeholder="Ej: Investigando, Reuniendo gente, Redactando estatutos" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="supportNeeded" className="block text-sm font-medium text-text-primary mb-1">Tipo de Apoyo Necesario (Opcional)</label>
            <textarea id="supportNeeded" name="supportNeeded" value={formData.supportNeeded} onChange={handleChange} rows={2} placeholder="Ej: Asesoría legal, Contacto con otros sindicatos, Material" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Mensaje <span className="text-red-500">*</span></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>

          <div>
            <button type="submit" disabled={status === 'sending'} className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-center text-green-600">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-600">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
          )}
        </form>

      </main>
      <Footer />
    </div>
  );
}
