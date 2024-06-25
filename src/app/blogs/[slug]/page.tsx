import { BlogsData } from "@/lib/data/data";
import { cn } from "@/lib/utils";
import Footer from "@/ui/Sections/Footer";
import { MaxWidthWrapper } from "@/ui/layout/max-width-wrapper";

export default function Page({ params }: { params: { slug: string } }) {
  const BlogPost = BlogsData.find((o) => o.id == params.slug);

  if (!BlogPost) {
    return (
      <section className="pt-10">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{params.slug}</h1>
            <p>This blog post does not exist. Please check the URL.</p>
          </div>
        </MaxWidthWrapper>
      </section>
    );
  }

  return (
    <div>
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:to-[#111111] pt-10 pb-60">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold pb-8">{BlogPost?.title}</h1>
          {BlogPost?.content.map((content, index) => (
            <div key={index}>
              <div
                className={cn({
                  "text-2xl pt-10": content.type == "h1",
                  "text-xl pt-6": content.type == "h2",
                  "text-sm": content.type == "paragraph",
                  "bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6": content.type == "code",
                })}
              >
                {content.content.map((text, index) => (
                  <div key={index}>{text}</div>
                ))}
              </div>
              <div/>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    <div className="w-full border-t pb-10"></div>
    <Footer />
    </div>
  );
}
