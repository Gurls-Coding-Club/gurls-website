/**
 * Navigation Configuration
 *
 * This file defines the navigation structure for the website.
 * To add a new navigation item, simply add a new object to the array.
 *
 * Types of navigation items:
 * - Simple link: { type: 'link', labelKey: 'nav.blog', href: '/blog' }
 * - Dropdown: { type: 'dropdown', labelKey: 'nav.about', items: [...] }
 */

import type { Language } from "../i18n/utils";

export interface NavigationLink {
  type: "link";
  /** Translation key for the link label (e.g., 'nav.blog') */
  labelKey: string;
  /** URL path (will be automatically localized) */
  href: string;
}

export interface NavigationDropdownItem {
  /** Translation key or plain text for dropdown item */
  label: string;
  /** URL path (will be automatically localized) */
  href: string;
}

export interface NavigationDropdown {
  type: "dropdown";
  /** Translation key for the dropdown button label */
  labelKey: string;
  /** Array of dropdown items */
  items: NavigationDropdownItem[];
}

export type NavigationItem = NavigationLink | NavigationDropdown;

/**
 * Main navigation items
 *
 * To add a new link:
 * 1. Add a new object to this array
 * 2. If using a translation key, make sure it exists in src/i18n/en.json and src/i18n/de.json
 * 3. The href will be automatically localized based on the current language
 *
 * Example:
 * {
 *   type: 'link',
 *   labelKey: 'nav.newPage',
 *   href: '/new-page'
 * }
 */
export const navigationItems: NavigationItem[] = [
  {
    type: "dropdown",
    labelKey: "nav.about",
    items: [
      { label: "nav.ourStory", href: "/#about" },
      { label: "nav.ourMission", href: "/#mission" },
      { label: "nav.team", href: "/#team" },
    ],
  },
  {
    type: "link",
    labelKey: "nav.events",
    href: "/#events",
  },
  {
    type: "link",
    labelKey: "nav.blog",
    href: "/blog",
  },
  {
    type: "link",
    labelKey: "nav.faq",
    href: "/faq",
  },
  {
    type: "link",
    labelKey: "nav.contact",
    href: "/contact",
  },
];

/**
 * Mobile navigation items
 *
 * For mobile, we flatten the navigation structure to simple links.
 * Dropdown items become individual links.
 */
export const getMobileNavigationItems = (): Array<{
  label: string;
  href: string;
}> => {
  const items: Array<{ label: string; href: string }> = [];

  navigationItems.forEach((item) => {
    if (item.type === "link") {
      items.push({ label: item.labelKey, href: item.href });
    } else if (item.type === "dropdown") {
      // For mobile, add the dropdown items as individual links
      item.items.forEach((dropdownItem) => {
        items.push(dropdownItem);
      });
    }
  });

  return items;
};
