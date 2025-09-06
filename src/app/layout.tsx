import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Cortello Drinks",
  description: "Experiências em coquetelaria para eventos inesquecíveis.",
  icons: {
    icon: "logo-cortello.png", // aqui coloca sua imagem da logo
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-neutral-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
