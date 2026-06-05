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
  description: string;
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
    description:
      "Passionate about bioinformatics and investigating biological questions with code using R and Python. In her free time you can find her running or hiking and exploring the Austrian countryside.",
    image: "/team/emily.jpg",
  },
  {
    name: "Lara",
    initials: "L",
    avatarColor: "#b3e5fc",
    role: "Co-Founder & Social Media Lead",
    description:
      "Software developer building C# applications for train production. Loves organising events, inline skating, gaming, and meeting new people. Fun fact: invite her over and she'll show up with a home-made cake!",
    image: "/team/lara.jpg",
  },
  {
    name: "Laura",
    initials: "L",
    avatarColor: "#c8e6c9",
    role: "Co-Founder & Project Management Lead",
    description:
      "Organises projects and events and leads workshops. If you ever see her working, you'll notice she needs at least 3–4 different drinks to keep up concentration.",
    image: "/team/laura.jpg",
  },
  {
    name: "Julia",
    initials: "J",
    avatarColor: "#c5cae9",
    role: "Strategy & Partnerships",
    description:
      "Responsible for strategy and partner relationship management. Works in IT consulting, supporting companies in their digital transformation. Motivated to make the tech industry a more inclusive and diverse space.",
    image: "/team/julia.jpg",
  },
  {
    name: "Pierre",
    initials: "P",
    avatarColor: "#ffe0b2",
    role: "HR Team",
    description:
      "Currently studying molecular biology and working in sales. Fun fact: \"I can tell the manufacturer of a roller coaster by the look of the tracks.\"",
    image: "/team/pierre.jpg",
  },
  {
    name: "Bibi",
    initials: "B",
    avatarColor: "#d1c4e9",
    role: "Project Management",
    description:
      "Software Engineer at Vendure. Passionate about bouldering, board games, and making change in the tech industry. Fun fact: can do a pull-up.",
    image: "/team/bibi.jpg",
  },
  {
    name: "Andreea",
    initials: "A",
    avatarColor: "#b2dfdb",
    role: "Project Management",
    description:
      "Passionate about telecommunications, working as a Software Engineer at a small telco company. In her free time she likes playing tennis, reading, and doing all kinds of DIY things.",
    image: "/team/andreea.jpg",
  },
  {
    name: "Anja",
    initials: "A",
    avatarColor: "#ffcdd2",
    role: "HR Team",
    description:
      "Holds a Master's in Cognitive Science and puts her passion for understanding people to work on the club's HR team. Fun fact: despite studying the human mind, her brain refuses to function without coffee first.",
    image: "/team/anja.jpg",
  },
  {
    name: "Anna",
    initials: "A",
    avatarColor: "#fff9c4",
    role: "HR Team",
    description:
      "Currently doing her PhD in Theoretical Biology, where she tries to understand evolutionary processes through statistical analyses in R. Outside of research, you'll likely find her doing sports or watching horror movies.",
    image: "/team/anna.jpg",
  },
];
