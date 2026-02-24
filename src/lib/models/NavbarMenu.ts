import mongoose, { Schema, Document } from "mongoose";

// Sub-link schema (deepest level)
const SubLinkSchema = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true },
  },
  { _id: false },
);

// SubMenuItem schema (second level - e.g. "Software Development")
const SubMenuItemSchema = new Schema(
  {
    name: { type: String },
    title: { type: String },
    desc: { type: String },
    iconName: { type: String }, // Store icon name as string (e.g. "Code", "Cloud")
    path: { type: String },
    featured: { type: Boolean, default: false },
    links: { type: [SubLinkSchema], default: [] },
  },
  { _id: false },
);

// Top-level MenuItem schema
const MenuItemSchema = new Schema(
  {
    name: { type: String, required: true },
    path: { type: String },
    order: { type: Number, default: 0 },
    isVisible: { type: Boolean, default: true },
    subMenu: { type: [SubMenuItemSchema], default: [] },
  },
  { _id: false },
);

// Main NavbarMenu document schema
export interface INavbarMenuContent extends Document {
  menus: Array<{
    name: string;
    path?: string;
    order: number;
    isVisible: boolean;
    subMenu: Array<{
      name?: string;
      title?: string;
      desc?: string;
      iconName?: string;
      path?: string;
      featured?: boolean;
      links?: Array<{ title: string; path: string }>;
    }>;
  }>;
  updatedAt: Date;
}

const NavbarMenuSchema = new Schema<INavbarMenuContent>(
  {
    menus: { type: [MenuItemSchema], default: [] },
  },
  { timestamps: true },
);

const NavbarMenuContent =
  mongoose.models.NavbarMenu ||
  mongoose.model<INavbarMenuContent>("NavbarMenu", NavbarMenuSchema);

export default NavbarMenuContent;
