import { useState, useEffect } from "react";

interface PortfolioItem {
  _id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  thumbnail_url: string;
  video_url: string;
  featured: boolean;
  display_order: number;
}

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    client: "",
    description: "",
    thumbnail_url: "",
    video_url: "",
    featured: false,
    display_order: 1,
  });

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        "https://video-crew-backend-production.up.railway.app/api/portfolio/"
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editItem
      ? `https://video-crew-backend-production.up.railway.app/api/portfolio/${editItem._id}`
      : "https://video-crew-backend-production.up.railway.app/api/portfolio/";

    try {
      await fetch(url, {
        method: editItem ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      fetchItems();
      setShowForm(false);
      setEditItem(null);
      setFormData({
        title: "",
        category: "",
        client: "",
        description: "",
        thumbnail_url: "",
        video_url: "",
        featured: false,
        display_order: 1,
      });
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this item?")) {
      try {
        await fetch(
          `https://video-crew-backend-production.up.railway.app/api/portfolio/${id}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        fetchItems();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      client: item.client,
      description: item.description,
      thumbnail_url: item.thumbnail_url,
      video_url: item.video_url,
      featured: item.featured,
      display_order: item.display_order,
    });
    setShowForm(true);
  };

  return (
    <div className="p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Portfolio Management
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm lg:text-base w-full sm:w-auto"
          >
            Add New Item
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-900 p-4 lg:p-6 rounded-lg mb-6 lg:mb-8">
            <h2 className="text-lg lg:text-xl font-semibold mb-4">
              {editItem ? "Edit" : "Add"} Portfolio Item
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700"
                required
              />
              <input
                type="text"
                placeholder="Client"
                value={formData.client}
                onChange={(e) =>
                  setFormData({ ...formData, client: e.target.value })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700"
                required
              />
              <input
                type="number"
                placeholder="Display Order"
                value={formData.display_order}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    display_order: parseInt(e.target.value),
                  })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700"
                required
              />
              <input
                type="url"
                placeholder="Thumbnail URL"
                value={formData.thumbnail_url}
                onChange={(e) =>
                  setFormData({ ...formData, thumbnail_url: e.target.value })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700"
                required
              />
              <input
                type="url"
                placeholder="Video URL"
                value={formData.video_url}
                onChange={(e) =>
                  setFormData({ ...formData, video_url: e.target.value })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700"
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="p-3 bg-gray-800 rounded border border-gray-700 md:col-span-2"
                rows={3}
                required
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                />
                <span>Featured</span>
              </label>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  {editItem ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditItem(null);
                  }}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="max-h-[85vh] overflow-y-auto">
            <div className="grid gap-1">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-gray-700 last:border-b-0"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{item.title}</h3>
                    <p className="text-gray-400 text-sm truncate">
                      {item.category} - {item.client}
                    </p>
                  </div>
                  <div className="flex space-x-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
