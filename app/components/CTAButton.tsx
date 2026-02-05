import Link from "next/link";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function CTAButton({ href, text, variant = "primary", className = "" }: CTAButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center text-center min-h-[44px] min-w-[44px]";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {text}
    </Link>
  );
}

