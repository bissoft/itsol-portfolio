"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { MenuItem, SubMenuItem, slugify, getSmartPath } from "@/utils";

// Define a type for the stack item which can be a MenuItem or a generic object
interface StackItem {
  name?: string;
  title?: string;
  items?: (MenuItem | SubMenuItem)[];
  description?: string;
}

interface MobMenuProps {
  Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStack, setMenuStack] = useState<StackItem[]>([]);
  const [currentMenu, setCurrentMenu] = useState<StackItem | null>(null);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setCurrentMenu({ title: "Menu", items: Menus });
      setMenuStack([]);
    }
  };

  const handleItemClick = (item: any) => {
    const title = item.name || item.title;
    const parentTitle = currentMenu?.title || "";

    if (item.subMenu?.length || item.links?.length) {
      if (currentMenu) setMenuStack([...menuStack, currentMenu]);
      setCurrentMenu({
        title: title,
        items: item.subMenu || item.links,
        description: item.desc,
      });
      const subItems = item.subMenu || item.links;
      subItems.forEach((sub: any) => {
        const subTitle = sub.name || sub.title;
        const path = getSmartPath(subTitle, sub.path, title);
        if (path) router.prefetch(path);
      });
    } else {
      const path = getSmartPath(title, item.path, parentTitle);
      if (path) {
        router.push(path);
        toggleDrawer();
      }
    }
  };

  const handleBackClick = () => {
    if (menuStack.length > 0) {
      // Go back to previous menu
      const previousMenu = menuStack[menuStack.length - 1];
      setCurrentMenu(previousMenu);
      setMenuStack(menuStack.slice(0, -1));
    } else {
      // Close menu if at root level
      toggleDrawer();
    }
  };

  const renderMenuItems = (items: any[]) => {
    return (
      <motion.ul className="space-y-1">
        {items.map((item, i) => {
          const hasChildren = item.subMenu?.length || item.links?.length;
          return (
            <motion.li
              key={item.name || item.title || i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  hasChildren ? "hover:bg-blue-50 hover:text-blue-600" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="h-4 w-4 text-blue-500" />}
                  <span className="font-medium">{item.name || item.title}</span>
                </div>
                {hasChildren && <ChevronRight className="h-4 w-4" />}
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    );
  };

  return (
    <div className="lg:hidden">
      <button
        className="z-[999] relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
        onClick={toggleDrawer}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 right-0 top-16 overflow-y-auto bg-white backdrop-blur-lg text-gray-800 p-6 pb-20 shadow-xl border-t border-blue-100"
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMenu?.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Back button and title */}
                  {menuStack.length > 0 && currentMenu && (
                    <button
                      className="flex items-center gap-2 p-3 text-blue-600 font-medium"
                      onClick={handleBackClick}
                    >
                      <ArrowLeft className="h-5 w-5" />
                      {currentMenu.title}
                    </button>
                  )}

                  {/* Menu description if available */}
                  {currentMenu?.description && (
                    <div className="p-3 text-gray-600 text-sm">
                      {currentMenu.description}
                    </div>
                  )}

                  {/* Render the current menu items */}
                  {renderMenuItems(currentMenu?.items || [])}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
