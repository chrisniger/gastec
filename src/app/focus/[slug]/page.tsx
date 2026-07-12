import { notFound } from "next/navigation";
import { focusPages, getFocusPageBySlug } from "@/data/focus-pages";
import FocusPageTemplate from "@/components/FocusPageTemplate";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return focusPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getFocusPageBySlug(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      locale: "en_US",
      siteName: "Gastec Group",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function FocusPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getFocusPageBySlug(slug);

  if (!data) {
    notFound();
  }

  return <FocusPageTemplate data={data} />;
}
