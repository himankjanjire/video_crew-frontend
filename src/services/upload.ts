export const upload = {
  uploadVideo: async (file: File, onProgress?: (progress: number) => void): Promise<string> => {
    const formData = new FormData();
    formData.append('video', file);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && onProgress) {
          const progress = (e.loaded / e.total) * 100;
          onProgress(progress);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response.url);
        } else {
          reject(new Error('Upload failed'));
        }
      });

      xhr.addEventListener('error', () => reject(new Error('Upload failed')));

      xhr.open('POST', '/api/upload/video');
      xhr.send(formData);
    });
  },

  uploadThumbnail: async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('thumbnail', file);

    const response = await fetch('/api/upload/thumbnail', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Thumbnail upload failed');
    
    const data = await response.json();
    return data.url;
  }
};