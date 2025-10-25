
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
 

async function getHomeData() {
  // Import JSON at build time (server component)
  const module = await import("@/../public/data/home.json");
  const data = module.default || module;
  return data;
}

export default async function Home() {
  const homeData = await getHomeData();
  const pictureSrc = (homeData.picture || "").replace(/^public\//, "/");
  const resumeHref = (homeData.resume || "").replace(/^public\//, "/");

  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 items-center w-full">
        <div className="md:col-span-5 flex justify-center md:block">
          <div className="mx-auto">
            <Avatar className="h-[70vw] w-[70vw] sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-xl border">
              <AvatarImage src={pictureSrc} alt={homeData.title} className="object-cover rounded-xl" />
              <AvatarFallback className="rounded-xl text-xl">SM</AvatarFallback>
            </Avatar>
          </div>
          
        </div>

        <div className="md:col-span-7">
          <div className="space-y-4">
            {Array.isArray(homeData.cards) && homeData.cards.map((card) => (
              <Card key={card.id || card.title} className="shadow-sm">
                <CardHeader className="pb-1">
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <Separator />
                </CardHeader>
                <CardContent>
                  {card.id === "about" ? (
                    <>
                      <p className="text-base leading-relaxed text-muted-foreground">{card.content}</p>
                      <div className="pt-3">
                        <Button asChild variant="outline" className="bg-white">
                          <a href={resumeHref} download>
                            Get my CV
                            <Download className="ml-2 size-4" aria-hidden="true" />
                          </a>
                        </Button>
                      </div>
                    </>
                  ) : null}

                  {card.type === "chips" ? (
                    <div className="flex flex-wrap gap-2">
                      {(card.items || []).map((topic) => (
                        <Badge key={topic} variant="secondary" className="px-3 py-1 text-sm">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  ) : null}

                  {card.type === "links" ? (
                    <div className="text-sm text-muted-foreground space-y-2">
                      {card.email ? (
                        <div className="flex items-center gap-2">
                          <Mail className="size-4" aria-hidden="true" />
                          <span className="font-medium">Email:</span>
                          <a href={`mailto:${card.email}`} className="hover:underline">{card.email}</a>
                        </div>
                      ) : null}
                      {card.phone ? (
                        <div className="flex items-center gap-2">
                          <Phone className="size-4" aria-hidden="true" />
                          <span className="font-medium">Phone:</span>
                          <a href={`tel:${card.phone.replace(/\s|\(|\)|-/g, "")}`} className="hover:underline">{card.phone}</a>
                        </div>
                      ) : null}
                      {card.linkedin ? (
                        <div className="flex items-center gap-2">
                          <Linkedin className="size-4" aria-hidden="true" />
                          <span className="font-medium">LinkedIn:</span>
                          <a href={card.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{card.linkedin}</a>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
