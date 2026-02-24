"use client";

import { useEffect, useState } from "react";
import { getNavbarData, updateNavbarData } from "@/lib/cms";
import {
  NavbarData,
  NavbarMenuItem,
  NavbarSubMenuItem,
  NavbarSubLink,
} from "@/lib/cms-defaults";
import { ICON_OPTIONS, slugify, getSmartPath } from "@/utils";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  Save,
  X,
  ChevronDown,
  ChevronUp,
  GripVertical,
  Eye,
  EyeOff,
  Link,
  Menu,
  Layers,
} from "lucide-react";

export default function NavbarEditor() {
  const [data, setData] = useState<NavbarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await getNavbarData(true);
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load navbar data", error);
        toast.error("Failed to load navbar data");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // ---- Top-level Menu CRUD ----
  const addMenu = () => {
    setData((prev) => {
      if (!prev) return null;
      const newMenu: NavbarMenuItem = {
        name: "New Menu",
        order: prev.menus.length,
        isVisible: true,
        subMenu: [],
      };
      return { ...prev, menus: [...prev.menus, newMenu] };
    });
    setExpandedMenu(data?.menus.length ?? 0);
  };

  const removeMenu = (index: number) => {
    if (!confirm("Are you sure you want to delete this menu item?")) return;
    setData((prev) => {
      if (!prev) return null;
      return { ...prev, menus: prev.menus.filter((_, i) => i !== index) };
    });
    if (expandedMenu === index) setExpandedMenu(null);
  };

  const updateMenu = (
    index: number,
    field: keyof NavbarMenuItem,
    value: any,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      let newMenu = { ...menus[index], [field]: value };

      // Auto-generate path for top-level menus if they are simple links
      if (field === "name" && !newMenu.subMenu?.length) {
        newMenu.path = getSmartPath(value, newMenu.path);
      }

      menus[index] = newMenu;
      return { ...prev, menus };
    });
  };

  const moveMenu = (index: number, direction: "up" | "down") => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= menus.length) return prev;
      [menus[index], menus[targetIndex]] = [menus[targetIndex], menus[index]];
      // Update order values
      return { ...prev, menus: menus.map((m, i) => ({ ...m, order: i })) };
    });
  };

  // ---- SubMenu CRUD ----
  const addSubMenu = (menuIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      const newSub: NavbarSubMenuItem = {
        name: "New Sub Item",
        desc: "Description here",
        iconName: "Code",
        featured: true,
        links: [],
      };
      menus[menuIndex] = {
        ...menus[menuIndex],
        subMenu: [...menus[menuIndex].subMenu, newSub],
      };
      return { ...prev, menus };
    });
  };

  const removeSubMenu = (menuIndex: number, subIndex: number) => {
    if (!confirm("Delete this sub-menu item?")) return;
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      menus[menuIndex] = {
        ...menus[menuIndex],
        subMenu: menus[menuIndex].subMenu.filter((_, i) => i !== subIndex),
      };
      return { ...prev, menus };
    });
  };

  const updateSubMenu = (
    menuIndex: number,
    subIndex: number,
    field: keyof NavbarSubMenuItem,
    value: any,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      if (!menus[menuIndex]) return prev;
      const subMenu = [...menus[menuIndex].subMenu];
      if (!subMenu[subIndex]) return prev;

      let newSub = { ...subMenu[subIndex], [field]: value };

      // Auto-generate path for sub-menu items
      if (field === "name") {
        newSub.path = getSmartPath(value, newSub.path, menus[menuIndex].name);
      }

      subMenu[subIndex] = newSub;
      menus[menuIndex] = { ...menus[menuIndex], subMenu };
      return { ...prev, menus };
    });
  };

  const moveSubMenu = (
    menuIndex: number,
    subIndex: number,
    direction: "up" | "down",
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      const subMenu = [...menus[menuIndex].subMenu];
      const targetIndex = direction === "up" ? subIndex - 1 : subIndex + 1;
      if (targetIndex < 0 || targetIndex >= subMenu.length) return prev;
      [subMenu[subIndex], subMenu[targetIndex]] = [
        subMenu[targetIndex],
        subMenu[subIndex],
      ];
      menus[menuIndex] = { ...menus[menuIndex], subMenu };
      return { ...prev, menus };
    });
  };

  // ---- Links CRUD ----
  const addLink = (menuIndex: number, subIndex: number) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      const subMenu = [...menus[menuIndex].subMenu];
      const newLink: NavbarSubLink = { title: "New Link", path: "/" };
      subMenu[subIndex] = {
        ...subMenu[subIndex],
        links: [...(subMenu[subIndex].links || []), newLink],
      };
      menus[menuIndex] = { ...menus[menuIndex], subMenu };
      return { ...prev, menus };
    });
  };

  const removeLink = (
    menuIndex: number,
    subIndex: number,
    linkIndex: number,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      const subMenu = [...menus[menuIndex].subMenu];
      subMenu[subIndex] = {
        ...subMenu[subIndex],
        links: (subMenu[subIndex].links || []).filter(
          (_, i) => i !== linkIndex,
        ),
      };
      menus[menuIndex] = { ...menus[menuIndex], subMenu };
      return { ...prev, menus };
    });
  };

  const updateLink = (
    menuIndex: number,
    subIndex: number,
    linkIndex: number,
    field: keyof NavbarSubLink,
    value: string,
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      if (!menus[menuIndex]) return prev;
      const subMenu = [...menus[menuIndex].subMenu];
      if (!subMenu[subIndex]) return prev;
      const links = [...(subMenu[subIndex].links || [])];

      let newLink = { ...links[linkIndex], [field]: value };

      // Smart Slug logic: Auto-generate path from title globally
      if (field === "title" && subMenu[subIndex]) {
        newLink.path = getSmartPath(
          value,
          newLink.path,
          subMenu[subIndex].name || menus[menuIndex].name,
        );
      }

      links[linkIndex] = newLink;
      subMenu[subIndex] = { ...subMenu[subIndex], links };
      menus[menuIndex] = { ...menus[menuIndex], subMenu };
      return { ...prev, menus };
    });
  };

  const moveLink = (
    menuIndex: number,
    subIndex: number,
    linkIndex: number,
    direction: "up" | "down",
  ) => {
    setData((prev) => {
      if (!prev) return null;
      const menus = [...prev.menus];
      const subMenu = [...menus[menuIndex].subMenu];
      const links = [...(subMenu[subIndex].links || [])];
      const targetIndex = direction === "up" ? linkIndex - 1 : linkIndex + 1;
      if (targetIndex < 0 || targetIndex >= links.length) return prev;
      [links[linkIndex], links[targetIndex]] = [
        links[targetIndex],
        links[linkIndex],
      ];
      subMenu[subIndex] = { ...subMenu[subIndex], links };
      menus[menuIndex] = { ...menus[menuIndex], subMenu };
      return { ...prev, menus };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    setSaving(true);
    try {
      await updateNavbarData(data);
      toast.success("Navbar updated successfully!");
    } catch (error) {
      console.error("Failed to update navbar data", error);
      toast.error("Failed to update navbar");
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
      <div className="flex items-center gap-3 mb-6">
        <Menu className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Edit Navbar Menus</h2>
      </div>

      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
        <strong>How it works:</strong> Add top-level menu items (e.g. Services,
        Industries). Each menu can have sub-items with icons and links. Changes
        are saved to the database and reflected on the website immediately.
      </div>

      {/* Hierarchy Preview */}
      <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h3 className="text-sm font-bold text-gray-500 uppercase mb-4 flex items-center gap-2">
          <Eye size={16} /> Hierarchy Preview
        </h3>
        <div className="flex flex-wrap gap-4">
          {data.menus.map((menu, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div
                className={`text-sm font-bold px-3 py-1 rounded-md border ${menu.isVisible ? "bg-white border-blue-200 text-blue-700" : "bg-gray-100 border-gray-300 text-gray-400 decoration-line-through"}`}
              >
                {menu.name}
              </div>
              {menu.subMenu.length > 0 && (
                <div className="ml-2 flex flex-col gap-1 border-l-2 border-gray-200 pl-2">
                  {menu.subMenu.map((sub, j) => (
                    <div
                      key={j}
                      className="text-[10px] text-gray-500 flex items-center gap-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Add Menu Button */}
        <div className="flex justify-between items-center bg-white sticky top-0 z-40 py-2 border-b border-gray-100 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Menu Items ({data.menus.length})
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                if (confirm("Discard all unsaved changes and reload?")) {
                  window.location.reload();
                }
              }}
              className="text-sm text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 font-medium"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={addMenu}
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 font-medium shadow-sm transition-all"
            >
              <Plus size={16} /> Add Menu Item
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {data.menus.map((menu, menuIndex) => (
            <div
              key={menuIndex}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50"
            >
              {/* Menu Header */}
              <div
                className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpandedMenu(expandedMenu === menuIndex ? null : menuIndex)
                }
              >
                <div className="flex items-center gap-3">
                  <GripVertical size={18} className="text-gray-300" />
                  <span className="font-bold text-gray-500 w-6">
                    {menuIndex + 1}.
                  </span>
                  <span className="font-semibold text-gray-800">
                    {menu.name}
                  </span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {menu.subMenu.length} sub-items
                  </span>
                  {!menu.isVisible && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                      Hidden
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      moveMenu(menuIndex, "up");
                    }}
                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                    title="Move Up"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      moveMenu(menuIndex, "down");
                    }}
                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                    title="Move Down"
                  >
                    <ChevronDown size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateMenu(menuIndex, "isVisible", !menu.isVisible);
                    }}
                    className={`p-1.5 rounded ${menu.isVisible ? "text-green-500 hover:bg-green-50" : "text-gray-400 hover:bg-gray-100"}`}
                    title={menu.isVisible ? "Hide" : "Show"}
                  >
                    {menu.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeMenu(menuIndex);
                    }}
                    className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                  {expandedMenu === menuIndex ? (
                    <ChevronUp size={20} className="text-gray-400 ml-1" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 ml-1" />
                  )}
                </div>
              </div>

              {/* Expanded Menu Content */}
              {expandedMenu === menuIndex && (
                <div className="p-6 border-t border-gray-200 space-y-6 bg-white">
                  {/* Menu Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Menu Name
                      </label>
                      <input
                        type="text"
                        value={menu.name}
                        onChange={(e) =>
                          updateMenu(menuIndex, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        placeholder="e.g. Services"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                        Menu Path
                      </label>
                      <input
                        type="text"
                        value={menu.path || ""}
                        onChange={(e) =>
                          updateMenu(menuIndex, "path", e.target.value)
                        }
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm font-mono text-gray-600 focus:bg-white focus:border-blue-500 outline-none"
                        placeholder="/path"
                      />
                    </div>
                  </div>

                  {/* Sub-Menu Items */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-bold text-gray-600 flex items-center gap-2">
                        <Layers size={16} /> Sub-Menu Items (
                        {menu.subMenu.length})
                      </h4>
                      <button
                        type="button"
                        onClick={() => addSubMenu(menuIndex)}
                        className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded flex items-center gap-1 hover:bg-green-100 font-medium border border-green-200"
                      >
                        <Plus size={12} /> Add Sub-Item
                      </button>
                    </div>

                    <div className="space-y-3">
                      {menu.subMenu.map((sub, subIndex) => {
                        const subKey = `${menuIndex}-${subIndex}`;
                        return (
                          <div
                            key={subIndex}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            {/* Sub-Menu Header */}
                            <div
                              className="bg-gray-50 p-3 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                              onClick={() =>
                                setExpandedSubMenu(
                                  expandedSubMenu === subKey ? null : subKey,
                                )
                              }
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-400">
                                  {subIndex + 1}.
                                </span>
                                <span className="font-medium text-gray-700 text-sm">
                                  {sub.name}
                                </span>
                                {sub.iconName && (
                                  <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                                    {sub.iconName}
                                  </span>
                                )}
                                <span className="text-xs text-gray-400">
                                  {(sub.links || []).length} links
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveSubMenu(menuIndex, subIndex, "up");
                                  }}
                                  className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                                  title="Move Up"
                                >
                                  <ChevronUp size={14} />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveSubMenu(menuIndex, subIndex, "down");
                                  }}
                                  className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                                  title="Move Down"
                                >
                                  <ChevronDown size={14} />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeSubMenu(menuIndex, subIndex);
                                  }}
                                  className="p-1 text-red-400 hover:text-red-600"
                                >
                                  <Trash2 size={14} />
                                </button>
                                {expandedSubMenu === subKey ? (
                                  <ChevronUp
                                    size={16}
                                    className="text-gray-400"
                                  />
                                ) : (
                                  <ChevronDown
                                    size={16}
                                    className="text-gray-400"
                                  />
                                )}
                              </div>
                            </div>

                            {/* Sub-Menu Expanded */}
                            {expandedSubMenu === subKey && (
                              <div className="p-4 border-t border-gray-200 space-y-4 bg-white">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      value={sub.name || ""}
                                      onChange={(e) =>
                                        updateSubMenu(
                                          menuIndex,
                                          subIndex,
                                          "name",
                                          e.target.value,
                                        )
                                      }
                                      className="w-full px-3 py-2 border rounded text-sm"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                                      Icon Name
                                    </label>
                                    <select
                                      value={sub.iconName || ""}
                                      onChange={(e) =>
                                        updateSubMenu(
                                          menuIndex,
                                          subIndex,
                                          "iconName",
                                          e.target.value,
                                        )
                                      }
                                      className="w-full px-3 py-2 border rounded text-sm"
                                    >
                                      <option value="">-- No Icon --</option>
                                      {ICON_OPTIONS.map((icon) => (
                                        <option key={icon} value={icon}>
                                          {icon}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="md:col-span-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                                      Category Path
                                    </label>
                                    <input
                                      type="text"
                                      value={sub.path || ""}
                                      onChange={(e) =>
                                        updateSubMenu(
                                          menuIndex,
                                          subIndex,
                                          "path",
                                          e.target.value,
                                        )
                                      }
                                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs font-mono text-gray-600 focus:bg-white focus:border-blue-500 outline-none"
                                      placeholder="/category-path"
                                    />
                                  </div>
                                  <div className="flex items-center gap-2 pt-5">
                                    <input
                                      type="checkbox"
                                      id={`featured-${subKey}`}
                                      checked={sub.featured || false}
                                      onChange={(e) =>
                                        updateSubMenu(
                                          menuIndex,
                                          subIndex,
                                          "featured",
                                          e.target.checked,
                                        )
                                      }
                                      className="w-4 h-4"
                                    />
                                    <label
                                      htmlFor={`featured-${subKey}`}
                                      className="text-sm text-gray-600"
                                    >
                                      Featured (show in dropdown)
                                    </label>
                                  </div>
                                  <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                                      Description
                                    </label>
                                    <input
                                      type="text"
                                      value={sub.desc || ""}
                                      onChange={(e) =>
                                        updateSubMenu(
                                          menuIndex,
                                          subIndex,
                                          "desc",
                                          e.target.value,
                                        )
                                      }
                                      className="w-full px-3 py-2 border rounded text-sm"
                                    />
                                  </div>
                                </div>

                                {/* Links */}
                                <div>
                                  <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                                      <Link size={12} /> Links (
                                      {(sub.links || []).length})
                                    </label>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        addLink(menuIndex, subIndex)
                                      }
                                      className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                                    >
                                      <Plus size={12} /> Add Link
                                    </button>
                                  </div>
                                  <div className="space-y-2">
                                    {(sub.links || []).map(
                                      (link, linkIndex) => (
                                        <div
                                          key={linkIndex}
                                          className="flex gap-2 items-center"
                                        >
                                          <input
                                            type="text"
                                            value={link.title}
                                            onChange={(e) =>
                                              updateLink(
                                                menuIndex,
                                                subIndex,
                                                linkIndex,
                                                "title",
                                                e.target.value,
                                              )
                                            }
                                            className="flex-1 px-3 py-2 border rounded-lg text-sm font-bold text-gray-800"
                                            placeholder="Link Title"
                                          />
                                          <input
                                            type="text"
                                            value={link.path}
                                            onChange={(e) =>
                                              updateLink(
                                                menuIndex,
                                                subIndex,
                                                linkIndex,
                                                "path",
                                                e.target.value,
                                              )
                                            }
                                            className="flex-1 px-3 py-2 bg-gray-50 border rounded-lg text-[10px] font-mono text-gray-600 focus:bg-white focus:border-blue-500 outline-none"
                                            placeholder="URL Path"
                                          />
                                          <div className="flex flex-col gap-0.5">
                                            <button
                                              type="button"
                                              onClick={() =>
                                                moveLink(
                                                  menuIndex,
                                                  subIndex,
                                                  linkIndex,
                                                  "up",
                                                )
                                              }
                                              className="text-gray-400 hover:text-gray-600"
                                            >
                                              <ChevronUp size={12} />
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                moveLink(
                                                  menuIndex,
                                                  subIndex,
                                                  linkIndex,
                                                  "down",
                                                )
                                              }
                                              className="text-gray-400 hover:text-gray-600"
                                            >
                                              <ChevronDown size={12} />
                                            </button>
                                          </div>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              removeLink(
                                                menuIndex,
                                                subIndex,
                                                linkIndex,
                                              )
                                            }
                                            className="text-red-400 hover:text-red-600 p-1"
                                          >
                                            <X size={14} />
                                          </button>
                                        </div>
                                      ),
                                    )}
                                    {(sub.links || []).length === 0 && (
                                      <p className="text-xs text-gray-400 italic">
                                        No links added yet.
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                      {menu.subMenu.length === 0 && (
                        <p className="text-sm text-gray-400 italic text-center py-4">
                          No sub-menu items. Add some or set a direct path
                          above.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-6 sticky bottom-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-100 z-50">
          <button
            type="submit"
            disabled={saving}
            className={`px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all flex items-center gap-2 ${saving ? "opacity-70 cursor-wait" : ""}`}
          >
            <Save size={18} />
            {saving ? "Saving Changes..." : "Save Navbar"}
          </button>
        </div>
      </form>
    </div>
  );
}
