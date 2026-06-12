/**
 * Team Members Configuration
 *
 * To add/edit a team member, update this array.
 * - name: Full name
 * - role: Role/title (shown in accent color)
 * - description: Short bio paragraph
 * - initials: 2-letter initials shown in the avatar circle
 * - avatarColor: Tailwind bg color class OR a hex color string like '#a8d8ea'
 * - image: (optional) path to a photo in /public, e.g. '/team/lena.jpg'
 *          When provided, the image is shown instead of the initials circle.
 */

export interface TeamMember {
  name: string;
  role: string;
  descriptionKey: string;
  initials: string;
  avatarColor: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Emily",
    initials: "E",
    avatarColor: "#f8bbd0",
    role: "Co-Founder & HR Lead",
    descriptionKey: "pages.team.members.emily",
    image: "/team/emily.jpg",
  },
  {
    name: "Lara",
    initials: "L",
    avatarColor: "#b3e5fc",
    role: "Co-Founder & Social Media Lead",
    descriptionKey: "pages.team.members.lara",
    image: "/team/lara.jpg",
  },
  {
    name: "Laura",
    initials: "L",
    avatarColor: "#c8e6c9",
    role: "Co-Founder & Project Management Lead",
    descriptionKey: "pages.team.members.laura",
    image: "/team/laura.jpg",
  },
  {
    name: "Julia",
    initials: "J",
    avatarColor: "#c5cae9",
    role: "Strategy & Partnerships",
    descriptionKey: "pages.team.members.julia",
    image: "/team/julia.jpg",
  },
  {
    name: "Pierre",
    initials: "P",
    avatarColor: "#ffe0b2",
    role: "HR",
    descriptionKey: "pages.team.members.pierre",
    image: "/team/pierre.jpg",
  },
  {
    name: "Bibi",
    initials: "B",
    avatarColor: "#d1c4e9",
    role: "Project Management",
    descriptionKey: "pages.team.members.bibi",
    image: "/team/bibi.jpg",
  },
  {
    name: "Andreea",
    initials: "A",
    avatarColor: "#b2dfdb",
    role: "Project Management",
    descriptionKey: "pages.team.members.andreea",
    image: "/team/andreea.jpg",
  },
  {
    name: "Anja",
    initials: "A",
    avatarColor: "#ffcdd2",
    role: "HR",
    descriptionKey: "pages.team.members.anja",
    image: "/team/anja.jpg",
  },
  {
    name: "Marjan",
    initials: "M",
    avatarColor: "#dcedc8",
    role: "Social Media",
    descriptionKey: "pages.team.members.marjan",
    image: "/team/marjan.jpg",
  },
  {
    name: "Anna",
    initials: "A",
    avatarColor: "#fff9c4",
    role: "HR",
    descriptionKey: "pages.team.members.anna",
    image: "/team/anna.jpg",
  },
];
