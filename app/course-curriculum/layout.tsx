import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Curriculum",
  description: "Detailed curriculum for BCS-JSE (Basic Computer Skills + Job Search Essentials) and other GITSICS training programs. 12-session structure with objectives, deliverables, and homework.",
  openGraph: {
    title: "Course Curriculum | BCS-JSE & Training Programs | GITSICS",
    description: "View detailed course curricula including Basic Computer Skills + Job Search Essentials (BCS-JSE) 12-session program.",
  },
};

export default function CourseCurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
