"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

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
  const IconComponent = LucideIcons[iconName];

  if (!IconComponent) {
    // Fallback icon if name not found
    return <LucideIcons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};

export default IconRenderer;
