"use client";

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

const Breadcrumb = ({ items, theme = 'light', className = '' }: BreadcrumbProps) => {
  const isDark = theme === 'dark';

  const linkClass = isDark 
    ? "text-white/70 hover:text-white" 
    : "text-gray-500 hover:text-blue-600";
    
  const activeClass = isDark 
    ? "text-white" 
    : "text-gray-900";
    
  const iconClass = isDark 
    ? "text-white/40" 
    : "text-gray-400";

  return (
    <nav className={`flex py-2 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className={`inline-flex items-center text-sm font-medium transition-colors ${linkClass}`}>
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className={`w-4 h-4 mx-1 ${iconClass}`} />
              {item.href ? (
                <Link href={item.href} className={`ml-1 text-sm font-medium transition-colors md:ml-2 ${linkClass}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={`ml-1 text-sm font-medium md:ml-2 line-clamp-1 max-w-[200px] md:max-w-xs ${activeClass}`}>
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
