export const metadata = {
  title: "Research | Sumedha Minocha",
};

import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";

async function getResearchData() {
  const module = await import("@/../public/data/research.json");
  const data = module.default || module;
  return data;
}

export default async function ResearchPage() {
  const research = await getResearchData();

  return (
    <section className="space-y-6">
      {/* <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Research</h1> */}

      <div className="space-y-8">
        {(research.sections || []).map((section) => (
          <div key={section._id || section.label} className="space-y-3">
            <h1 className="text-2xl font-semibold tracking-tight">{section.label}</h1>
            <Separator />
            <div className="space-y-3">
              {(section.items || []).map((item, idx) => (
                <div key={(item.title || idx) + "-row"} className="rounded-md border p-3">
                  <Collapsible>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        {item.title ? (
                          <div className="font-medium leading-snug break-words">{item.title}</div>
                        ) : null}
                        {item.sub ? (
                          <div className="text-xs text-muted-foreground mt-0.5 break-words">{item.sub}</div>
                        ) : null}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {item.link ? (
                          <Button asChild variant="ghost" size="icon" aria-label="Open link">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="size-4" />
                            </a>
                          </Button>
                        ) : null}
                        {(item.description || item.citation) ? (
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Toggle details">
                              <ChevronDown className="size-4" />
                            </Button>
                          </CollapsibleTrigger>
                        ) : null}
                      </div>
                    </div>
                    {(item.description || item.citation) ? (
                      <CollapsibleContent>
                        <div className="pt-2 space-y-2 text-sm text-muted-foreground leading-relaxed break-words">
                          {item.description ? (
                            <p>{item.description}</p>
                          ) : null}
                          {item.citation ? (
                            <p className="text-xs">{item.citation}</p>
                          ) : null}
                        </div>
                      </CollapsibleContent>
                    ) : null}
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


