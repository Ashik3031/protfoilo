import CaseStudyClient from "./CaseStudyClient";

const projectSlugs = [
    "project-alpha",
    "project-beta",
    "project-gamma",
    "project-delta",
];

export function generateStaticParams() {
    return projectSlugs.map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    return <CaseStudyClient slug={params.slug} />;
}
