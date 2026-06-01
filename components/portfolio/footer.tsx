import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-xl text-foreground hover:text-primary transition-colors"
          >
            Navneet Kaur
          </Link>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Designed & Developed by Navneet Kaur<Heart size={14} className="text-primary" /> 
          </p>

          <p className="text-muted-foreground text-sm">
            {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
