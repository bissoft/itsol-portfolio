import {
  Code,
  MonitorSmartphone,
  Database,
  Cloud,
  Users,
  LayoutDashboard,
  FileText,
  Rocket,
  BriefcaseBusiness,
  MessageCircle,
  ShieldCheck,
  BookOpenText,
  Phone,
  Lightbulb,
  UserPlus,
  Globe,
  Server,
  Cpu,
  BarChart2,
  Settings,
  ClipboardCheck,
  BrainCircuit,
  Lock,
  Network,
  Activity,
  Terminal,
  Settings2,
  LucideIcon,
} from "lucide-react";

export interface SubMenuItem {
  name?: string;
  title?: string;
  desc?: string;
  icon?: LucideIcon;
  path?: string;
  featured?: boolean;
  links?: SubMenuItem[];
}

export interface MenuItem {
  name: string;
  subMenu?: SubMenuItem[];
  path?: string;
}

// Icon name -> LucideIcon mapping for dynamic navbar
export const iconMap: Record<string, LucideIcon> = {
  Code,
  MonitorSmartphone,
  Database,
  Cloud,
  Users,
  LayoutDashboard,
  FileText,
  Rocket,
  BriefcaseBusiness,
  MessageCircle,
  ShieldCheck,
  BookOpenText,
  Phone,
  Lightbulb,
  UserPlus,
  Globe,
  Server,
  Cpu,
  BarChart2,
  Settings,
  ClipboardCheck,
  BrainCircuit,
  Lock,
  Network,
  Activity,
  Terminal,
  Settings2,
};
export const ICON_OPTIONS = Object.keys(iconMap);

import { defaultNavbarData } from "./lib/cms-defaults";

// ... [interfaces and iconMap remain same] ...

// Convert DB navbar data (with iconName strings) to MenuItem[] (with actual icons)
export function convertNavbarDataToMenuItems(navbarMenus: any[]): MenuItem[] {
  return (navbarMenus || []).map((menu: any) => ({
    name: menu.name,
    path: menu.path,
    subMenu: (menu.subMenu || []).map((sub: any) => ({
      name: sub.name,
      title: sub.title,
      desc: sub.desc,
      icon: sub.iconName ? iconMap[sub.iconName] : undefined,
      path: sub.path,
      featured: sub.featured,
      links: (sub.links || []).map((link: any) => ({
        title: link.title,
        path: link.path,
      })),
    })),
  }));
}

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Generates a clean URL path based on title, parent, and fallback path.
 * Enforces dynamic structure for Services and Industries.
 */
export const getSmartPath = (
  title: string,
  currentPath?: string,
  parentName?: string,
) => {
  const slug = slugify(title);
  const pName = (parentName || "").toLowerCase();
  const tLower = title.toLowerCase();

  // Hire Dev related paths (Talent/Staffing) - CHECK THIS FIRST
  const isHireDev =
    pName.includes("hire") ||
    pName.includes("talent") ||
    pName.includes("developer") ||
    pName.includes("special") ||
    pName.includes("expert") ||
    tLower.includes("hire") ||
    tLower.includes("expert") ||
    tLower.includes("special") ||
    tLower.includes("talent") ||
    (currentPath && currentPath.includes("/hire-dev/"));

  if (isHireDev) {
    return `/hire-dev/${slug}`;
  }

  // Industry-related paths
  if (
    pName.includes("industr") ||
    pName.includes("sector") ||
    tLower.includes("healthcare") ||
    (tLower.includes("tech") && pName.includes("industr"))
  ) {
    return `/industries/${slug}`;
  }

  // Engagement-related paths (Flexible models)
  if (
    pName.includes("engagement") ||
    pName.includes("model") ||
    pName.includes("collaborative") ||
    pName.includes("scope") ||
    pName.includes("aug") ||
    pName.includes("support") ||
    tLower.includes("staff aug") ||
    tLower.includes("dedicated team")
  ) {
    return `/engagement/${slug}`;
  }

  // Service-related paths — ALWAYS use generated slug, ignore stored path
  if (
    pName.includes("service") ||
    pName.includes("software") ||
    pName.includes("development") ||
    pName.includes("cloud") ||
    pName.includes("mobile") ||
    pName.includes("ai") ||
    pName.includes("devops") ||
    pName.includes("testing") ||
    pName.includes("consulting") ||
    pName.includes("staff") ||
    pName.includes("emerging") ||
    pName.includes("blockchain")
  ) {
    return `/services/${slug}`;
  }

  // Fallback to currentPath only for external/special links
  if (
    currentPath &&
    (currentPath.startsWith("http") || currentPath.startsWith("mailto:"))
  )
    return currentPath;

  return currentPath && currentPath !== "#" && currentPath !== "/"
    ? currentPath
    : `/${slug}`;
};

export const Menus: MenuItem[] = convertNavbarDataToMenuItems(
  defaultNavbarData.menus,
);
