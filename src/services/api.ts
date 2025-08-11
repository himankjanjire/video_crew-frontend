const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
  // Portfolio endpoints
  getPortfolioItems: async () => {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    return response.json();
  },

  createPortfolioItem: async (data: FormData) => {
    const response = await fetch(`${API_BASE_URL}/portfolio`, {
      method: 'POST',
      body: data,
    });
    return response.json();
  },

  // Contact endpoints
  submitContactForm: async (data: { name: string; email: string; message: string }) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getContactMessages: async () => {
    const response = await fetch(`${API_BASE_URL}/contact`);
    return response.json();
  }
};