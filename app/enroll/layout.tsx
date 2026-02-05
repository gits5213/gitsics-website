import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enroll Now",
  description: "Enroll in GITSICS training programs. Apply for QA Manual, QA Automation, SDET, API Testing, DevOps, Digital Marketing, Basic Computer Skills, and more. In-person, online, or corporate.",
  openGraph: {
    title: "Enroll | GITSICS Training Programs",
    description: "Start your career transformation. Apply for QA, SDET, digital literacy, or digital marketing training.",
  },
};

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
