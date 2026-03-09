"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { iconMap } from "@/utils";

interface IconRendererProps {
  iconName: string;
  className?: string;
  size?: number | string;
}

const IconRenderer: React.FC<IconRendererProps> = ({
  iconName,
  className,
  size,
}) => {
  // @ts-ignore
  const IconComponent = iconMap[iconName] || HelpCircle;

  return <IconComponent className={className} size={size} />;
};

export default IconRenderer;
