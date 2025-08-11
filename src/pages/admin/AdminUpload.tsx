import { useState } from "react";

export default function AdminUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const token = localStorage.getItem("adminToken");

  const handleFileUpload = async (file: File, type: "image" | "video") => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `https://video-crew-backend-production.up.railway.app/api/upload/${type}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        setUploadedUrls((prev) => [...prev, data.url]);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
          Upload Files
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileUpload(e.target.files[0], "image")
              }
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white"
              disabled={uploading}
            />
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upload Video</h2>
            <input
              type="file"
              accept="video/*"
              onChange={(e) =>
                e.target.files?.[0] &&
                handleFileUpload(e.target.files[0], "video")
              }
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white"
              disabled={uploading}
            />
          </div>
        </div>

        {uploading && (
          <div className="bg-blue-900 p-4 rounded-lg mb-6">
            <p className="text-center">Uploading...</p>
          </div>
        )}

        {uploadedUrls.length > 0 && (
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
            <div className="space-y-3">
              {uploadedUrls.map((url, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-800 p-3 rounded"
                >
                  <span className="text-sm text-gray-300 truncate flex-1 mr-4">
                    {url}
                  </span>
                  <button
                    onClick={() => copyToClipboard(url)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
