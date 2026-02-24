import { getConversationsData } from "@/lib/cms";
import ClientConversations from "@/components/ClientConversations";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata = {
  title: "Podcasts | ITSOL - Conversations that go beyond the code",
  description:
    "Listen to our latest discussions with industry leaders about global commerce, fintech security, collaborative workflows, and more.",
};

export default async function PodcastsPage() {
  const conversationsData = await getConversationsData();

  return (
    <div className="bg-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-20" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[{ label: "Podcasts" }]}
            theme="dark"
            className="mb-8"
          />

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-blue-500">Conversations</span> with
              Industry Leaders
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Dive into our latest podcast episodes where we explore the
              intersection of technology, business, and innovation with the
              people who are shaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mt-[-80px] relative z-20">
        <ClientConversations
          data={conversationsData}
          showHeading={false}
          showViewAll={false}
        />
      </div>

      {/* Stay Updated / CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest podcast
              episodes, industry insights, and technology trends directly in
              your inbox.
            </p>
            <NewsletterForm source="podcast_page" />
          </div>
        </div>
      </section>
    </div>
  );
}
