import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import {
  IconTarget,
  IconClock,
  IconChartLine,
  IconShieldCheck,
} from "@/components/icons";

export const dynamic = "force-static";

const ARGUMENTS = [
  {
    icon: <IconTarget />,
    title: "Des missions réelles, pas des buzzwords",
    body: "Recrutez sur des missions concrètes à 6 mois, pas sur une liste de compétences génériques. Méthode Lou Adler appliquée.",
  },
  {
    icon: <IconClock />,
    title: "La règle 72h, fini le silence radio",
    body: "Le candidat a droit à une réponse rapide. 48h pour consulter le dossier, 72h pour répondre après consultation. Le silence vaut refus, le match est libéré.",
  },
  {
    icon: <IconChartLine />,
    title: "Le Score POP™ : tenir dans le temps",
    body: "Indice de compatibilité durable mission × environnement. Plus qu'un recrutement réussi à J+30, c'est une collaboration qui fonctionne encore à J+180.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Parcours réels, pas CV parfaits",
    body: "Reconversion, apprentissage, senior, parcours atypique : les trajectoires réelles ont enfin leur place. Les ATS classiques les éliminent. Pas nous.",
  },
];

export default function EntreprisePage() {
  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-paper border-b border-trait">
        <div className="max-w-[1080px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="https://clicknpop.fr" aria-label="Click'n Pop — accueil">
            <Image
              src="/assets/logo-clicknpop-officiel.png"
              alt="Click'n Pop"
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#5F5E5A]">
            <a href="https://candidat.clicknpop.fr" className="hover:text-sauge-dark transition-colors">
              Vous cherchez un job&nbsp;?
            </a>
            <a href="https://cfa.clicknpop.fr" className="hover:text-sauge-dark transition-colors">
              CFA / OF / CCI
            </a>
            <a href="https://clicknpop.fr" className="hover:text-sauge-dark transition-colors">
              ← Retour Click&apos;n Pop
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-paper">
        <section className="max-w-[680px] mx-auto px-8 pt-16 pb-12 text-center">
          <h1 className="animate-pop-reveal font-serif text-[36px] sm:text-[44px] leading-[1.1] text-ink font-normal">
            Le recrutement
            <br />
            qui fait pop.
          </h1>

          <p className="mt-5 font-serif italic text-[18px] text-sauge leading-snug">
            Pour les DRH qui en ont assez du flop.
          </p>

          <div className="mt-6 mb-8 text-[16px] text-carbone leading-[1.7] text-left sm:text-center">
            <p>Un recrutement ne casse pas à cause des compétences.</p>
            <p>Il casse à cause d&apos;un décalage invisible entre la promesse et le travail réel.</p>
            <p className="mt-4">Click&apos;n Pop ne match pas des CV.</p>
            <p>On cherche les conditions pour que ça tienne.</p>
          </div>
        </section>

        <section aria-labelledby="args-entreprise-heading" className="max-w-[920px] mx-auto px-6 pb-16">
          <h2 id="args-entreprise-heading" className="sr-only">
            Pourquoi Click&apos;n Pop pour les entreprises
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
            {ARGUMENTS.map((arg) => (
              <li key={arg.title} className="flex gap-4">
                <span className="shrink-0 mt-1">{arg.icon}</span>
                <div>
                  <h3 className="font-serif text-[17px] font-medium text-ink leading-snug">{arg.title}</h3>
                  <p className="mt-2 text-[14px] text-carbone leading-relaxed">{arg.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="waitlist-entreprise-heading"
          className="bg-[rgba(107,132,103,0.06)] px-8 py-12"
        >
          <div className="max-w-[560px] mx-auto">
            <h2 id="waitlist-entreprise-heading" className="font-serif text-[22px] text-ink">
              On prépare l&apos;app entreprise pour fin mai.
            </h2>
            <p className="mt-2 text-[14px] text-carbone leading-relaxed">
              Laissez votre email professionnel. On vous prévient au lancement.
            </p>
            <WaitlistForm
              thirdFieldLabel="Raison sociale"
              thirdFieldPlaceholder="Nom de votre entreprise"
              thirdFieldName="raison_sociale"
              fourthSelect={{
                name: "taille_entreprise",
                label: "Combien d'employé·es dans votre structure ?",
                placeholder: "Choisir...",
                options: [
                  { label: "Moins de 11", value: "Moins de 11" },
                  { label: "11 à 49", value: "11 à 49" },
                  { label: "50 à 249", value: "50 à 249" },
                  { label: "250 et plus", value: "250 et plus" },
                ],
              }}
            />
          </div>
        </section>
      </main>

      <footer className="bg-[rgba(107,132,103,0.04)] py-6 px-8 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] text-[#888780]">
          <a href="https://candidat.clicknpop.fr" className="hover:text-sauge-dark transition-colors">Candidat·e</a>
          <span aria-hidden="true">·</span>
          <a href="https://cfa.clicknpop.fr" className="hover:text-sauge-dark transition-colors">CFA / OF</a>
          <span aria-hidden="true">·</span>
          <a href="https://clicknpop.fr" className="hover:text-sauge-dark transition-colors">Retour à l&apos;accueil</a>
          <span aria-hidden="true">·</span>
          <a href="#" className="hover:text-sauge-dark transition-colors">RGPD</a>
        </nav>
      </footer>
    </>
  );
}
