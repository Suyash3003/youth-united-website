/** Faculty mentors (2) + Executive Board students (14). Photos: /team/faces/01.jpg … 14.jpg (executive order; built from public/team/executive-cutout-3443.png via scripts/extract-team-portraits.js). */
export const facultyMembers = [
  {
    id: 'fac-1',
    name: 'Dr. Mukesh Dalal',
    initials: 'MD',
    photo: '/team/faculty/mukesh-dalal.jpg',
    role: 'Faculty Coordinator',
    department: 'Department of Electrical & Instrumentation Engineering',
    dept: 'EI',
    year: null,
    faculty: true,
    bio: 'Guides strategic direction, institute liaison, and ethical oversight for all Youth United programmes.',
    leadership: true,
    socials: { linkedin: 'https://www.linkedin.com/in/dr-mukesh-dalal-ba310926b/' },
  },
  {
    id: 'fac-2',
    name: 'Dr. Rajesh Dhayal',
    initials: 'RD',
    photo: '/team/faculty/rajesh-dhayal.jpg',
    photoPosition: '50% 28%',
    role: 'Faculty Coordinator',
    department: 'Department of Mathematics',
    dept: 'Math',
    year: null,
    faculty: true,
    bio: 'Supports community partnerships, volunteer training, and impact documentation across verticals.',
    leadership: true,
    socials: { linkedin: 'https://www.linkedin.com/in/rajesh-dhayal-87aaa8248/' },
  },
];

const members = [
  /* Row 1 — General Secretaries, then Joint / Finance row start */
  {
    id: 1,
    name: 'Saksham Dua',
    initials: 'SD',
    role: 'General Secretary',
    department: 'Computer Science',
    dept: 'CSE',
    roleFilter: 'general-secretary',
    photo: '/team/faces/saksham-dua.jpeg',
    photoPosition: '64% 22%',
    year: '3rd Year',
    bio: 'Co-leads records, internal communications, and coordination across the executive board.',
    leadership: true,
    socials: {
      instagram: 'https://www.instagram.com/sak.dua2004?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkedin: 'https://www.linkedin.com/in/saksham-dua-a77809280/',
    },
  },
  {
    id: 2,
    name: 'Aditi Gupta',
    initials: 'AG',
    role: 'General Secretary',
    department: 'Electrical Engineering',
    dept: 'EE',
    roleFilter: 'general-secretary',
    photo: '/team/faces/aditi-gupta.jpg',
    photoPosition: '50% 40%',
    year: '3rd Year',
    bio: 'Co-leads operations, meeting cadence, and handoffs between domains and faculty liaison.',
    leadership: true,
    socials: {
      instagram: 'https://www.instagram.com/aditi.gupta.27?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkedin: 'https://www.linkedin.com/in/aditi-dilip-kumar-gupta-78900428a/',
    },
  },
  {
    id: 3,
    name: 'Siddhartha Yadav',
    initials: 'SY',
    role: 'Joint Secretary',
    department: 'Mechanical Engineering',
    dept: 'ME',
    roleFilter: 'joint-secretary',
    photo: '/team/faces/siddhartha-yadav.png',
    photoPosition: '44% 20%',
    year: '3rd Year',
    bio: 'Supports the secretariat with scheduling, chapter updates, and cross-team follow-through.',
    leadership: true,
    socials: {
      linkedin: 'https://www.linkedin.com/in/siddhartha-yadav-667117287/',
    },
  },

  {
    id: 5,
    name: 'Samyak Jain',
    initials: 'SJ',
    role: 'Joint Secretary',
    department: 'Electronics & Comm.',
    dept: 'ECE',
    roleFilter: 'joint-secretary',
    photo: '/team/faces/samyak-jain.png',
    photoPosition: '43% 28%',
    year: '3rd Year',
    bio: 'Co-manages documentation, volunteer registers, and coordination with domain heads.',
    leadership: true,
    socials: {
      instagram: 'https://www.instagram.com/samdonothin63?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkedin: 'https://www.linkedin.com/in/samyakjain336/',
    },
  },
  /* Row 2 — EM, Convener, EM, then Marketing row start */

  {
    id: 8,
    name: 'Aviral Jain',
    initials: 'AJ',
    role: 'Event Management Head',
    department: 'Civil Engineering',
    dept: 'Civil',
    roleFilter: 'em-heads',
    photo: '/team/faces/aviral-jain.png',
    photoPosition: '50% 18%',
    year: '3rd Year',
    bio: 'Partners on logistics, safety, and scale execution for health, outreach, and community events.',
    leadership: false,
    socials: {
      instagram: 'https://www.instagram.com/aviral_j01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkedin: 'https://www.linkedin.com/in/aviral-jain-aj0101/',
    },
  },
  {
    id: 9,
    name: 'Nikhil Singla',
    initials: 'NS',
    role: 'Marketing Head',
    department: 'Biotechnology',
    dept: 'Bio',
    roleFilter: 'marketing-heads',
    photo: '/team/faces/image_4.jpg',
    year: '3rd Year',
    bio: 'Drives brand campaigns, digital reach, and partnerships for every major Youth United push.',
    leadership: false,
    socials: {
      instagram: 'https://www.instagram.com/_.nikhilsingla._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkedin: 'https://www.linkedin.com/in/nikhil-singla-03ns/',
    },
  },

];

export const techMembers = [
  {
    id: 'tech-1',
    name: 'Suyash Sahota',
    initials: 'SS',
    role: 'Website Developer',
    department: 'Tech Team',
    dept: 'Tech',
    year: '2nd Year',
    bio: 'Architected and engineered the Youth United digital platform, shaping the organization’s modern online presence.',
    leadership: true,
    socials: {
      instagram: 'https://www.instagram.com/suyash_sahota11/?hl=en',
      linkedin: 'https://www.linkedin.com/in/suyash-sahota-90936a380/',
    },
  },
  {
    id: 'tech-2',
    name: 'Parth Goyal',
    initials: 'PG',
    role: 'Website Developer',
    department: 'Tech Team',
    dept: 'Tech',
    year: '1st Year',
    bio: 'Collaborated on building the Youth United website, developing interactive components and ensuring performance.',
    leadership: true,
    socials: { linkedin: 'https://www.linkedin.com/in/parth-goyal-300547348/' },
  }
];

export default members;

