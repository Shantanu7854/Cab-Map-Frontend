import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "CabMap",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Changelog", href: "#" },
        { text: "Documentation", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Blog", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Discord", href: "#" },
        { text: "Twitter", href: "#" },
        { text: "Github", href: "#" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} CabMap. All rights reserved.`,
  policies = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-gradient-to-t from-green-50 via-white to-blue-50 w-full px-4 py-8 border-t border-blue-100 shadow-inner",
        className
      )}
    >
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="gap-8 sm:gap-12">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="rounded-full bg-blue-100 p-2 shadow">
                  {logo}
                </span>
                <h3 className="text-2xl font-extrabold text-blue-700 tracking-tight">
                  {name}
                </h3>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Making cab booking and address resolving effortless and reliable.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold text-green-700 mb-2">
                  {column.title}
                </h3>
                <ul className="space-y-1">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-muted-foreground text-sm hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-200 mt-6 pt-4">
            <div className="text-xs text-gray-500">{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}