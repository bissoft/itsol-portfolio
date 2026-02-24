"use client";

import { useEffect, useState } from "react";
import { getConversationsData, updateConversationsData } from "@/lib/cms";
import { ConversationsData } from "@/lib/cms-defaults";
import toast from "react-hot-toast";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function ConversationsEditor() {
  const [data, setData] = useState<ConversationsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getConversationsData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load conversations data", error);
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleConversationChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newConversations = [...prev.conversations];
      newConversations[index] = { ...newConversations[index], [field]: value };
      return { ...prev, conversations: newConversations };
    });
  };

  const handleSpeakerChange = (
    conversationIndex: number,
    speakerIndex: number,
    field: "name" | "role",
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const newConversations = [...prev.conversations];
      const newSpeakers = [...newConversations[conversationIndex].speakers];
      newSpeakers[speakerIndex] = {
        ...newSpeakers[speakerIndex],
        [field]: value,
      };
      newConversations[conversationIndex] = {
        ...newConversations[conversationIndex],
        speakers: newSpeakers,
      };
      return { ...prev, conversations: newConversations };
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addConversation = () => {
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        conversations: [
          ...prev.conversations,
          {
            title: "New Conversation",
            partner: "Partner Name",
            partnerLogo: "https://via.placeholder.com/150",
            speakers: [
              { name: "Speaker 1", role: "Role 1" },
              { name: "Speaker 2", role: "Role 2" },
            ],
            image: "https://via.placeholder.com/600x800",
            audioUrl:
              "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          },
        ],
      };
    });
    setExpandedIndex(data?.conversations.length || 0);
  };

  const removeConversation = (index: number) => {
    if (!confirm("Are you sure you want to delete this conversation?")) return;
    setData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        conversations: prev.conversations.filter((_, i) => i !== index),
      };
    });
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    setSaving(true);
    try {
      await updateConversationsData(data);
      toast.success("Conversations section updated successfully!");
    } catch (error) {
      console.error("Failed to update conversations data", error);
      toast.error("Failed to update data");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!data)
    return (
      <div className="p-8 text-center text-red-500">Error loading data.</div>
    );

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md mb-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit Conversations Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Main Text */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Section Branding
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Heading (Use \n for line break)
            </label>
            <textarea
              name="heading"
              rows={2}
              value={data.heading}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Conversations ({data.conversations.length})
            </h3>
            <button
              type="button"
              onClick={addConversation}
              className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-blue-100 font-medium"
            >
              <Plus size={16} /> Add New
            </button>
          </div>

          <div className="space-y-4">
            {data.conversations.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50"
              >
                {/* Header */}
                <div
                  className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-500 w-6">
                      {index + 1}.
                    </span>
                    <span className="font-semibold text-gray-800 truncate max-w-[250px]">
                      {item.title}
                    </span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      {item.partner}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeConversation(index);
                      }}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                    {expandedIndex === index ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <div className="p-6 border-t border-gray-200 space-y-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleConversationChange(
                              index,
                              "title",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Partner Name
                        </label>
                        <input
                          type="text"
                          value={item.partner}
                          onChange={(e) =>
                            handleConversationChange(
                              index,
                              "partner",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Partner Logo URL
                        </label>
                        <input
                          type="text"
                          value={item.partnerLogo}
                          onChange={(e) =>
                            handleConversationChange(
                              index,
                              "partnerLogo",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Cover Image URL
                        </label>
                        <input
                          type="text"
                          value={item.image}
                          onChange={(e) =>
                            handleConversationChange(
                              index,
                              "image",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Audio URL (MP3/WAV)
                        </label>
                        <input
                          type="text"
                          value={item.audioUrl}
                          onChange={(e) =>
                            handleConversationChange(
                              index,
                              "audioUrl",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>

                    {/* Speakers */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                        Speakers
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md border">
                        {item.speakers.map((speaker, sIndex) => (
                          <div key={sIndex} className="space-y-2">
                            <p className="text-xs font-semibold text-gray-400 px-1">
                              Speaker {sIndex + 1}
                            </p>
                            <input
                              type="text"
                              value={speaker.name}
                              onChange={(e) =>
                                handleSpeakerChange(
                                  index,
                                  sIndex,
                                  "name",
                                  e.target.value,
                                )
                              }
                              className="w-full px-2 py-1 border rounded text-sm mb-1"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              value={speaker.role}
                              onChange={(e) =>
                                handleSpeakerChange(
                                  index,
                                  sIndex,
                                  "role",
                                  e.target.value,
                                )
                              }
                              className="w-full px-2 py-1 border rounded text-sm"
                              placeholder="Role"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-6 sticky bottom-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-100 z-50">
          <button
            type="submit"
            disabled={saving}
            className={`px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            {saving ? "Saving Changes..." : "Save All Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
