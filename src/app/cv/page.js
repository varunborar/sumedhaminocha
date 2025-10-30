export const metadata = {
    title: "CV | Sumedha Minocha",
};

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

async function getCVData() {
    const module = await import("@/../public/data/home.json");
    const data = module.default || module;
    return data;
}

export default async function CVPage() {
    const cv = await getCVData();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const resumePath = (cv.resume || "").replace(/^public\//, "/");
    const resumeHref = `${basePath}${resumePath}`;
    return (
        <section className="min-h-[70vh] flex items-center justify-center">
            <Button asChild variant="outline" className="bg-white">
                <a href={resumeHref} download>
                    Get my CV
                    <Download className="ml-2 size-4" aria-hidden="true" />
                </a>
            </Button>
        </section>
    );
}