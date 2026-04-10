import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileSearch,
  FileText,
  MessageSquareWarning,
  Route as RouteIcon,
  Landmark,
  ShieldCheck,
  Target,
  Users,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import claraAvatar from "@/assets/clara-avatar.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clara AI" },
      {
        name: "description",
        content:
          "Regularize seu imóvel com mais rapidez e menos erros. A Clara te guia passo a passo no licenciamento e regularização.",
      },
      {
        property: "og:title",
        content: "Clara AI",
      },
      {
        property: "og:description",
        content:
          "Regularize seu imóvel com mais rapidez e menos erros. Checklist, revisão de documentos e orientação prática.",
      },
    ],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionTitle({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 md:mb-16">
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function Index() {
  const scrollToDemo = () => {
    document.getElementById("demonstracao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
          <span className="text-xl font-bold text-primary tracking-tight">Clara</span>
          <button
            onClick={scrollToDemo}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Falar com a Clara
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clara-light via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Regularize seu imóvel com mais{" "}
              <span className="text-primary">rapidez</span> e menos{" "}
              <span className="text-accent">erros</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              A Clara te guia passo a passo no licenciamento e regularização imobiliária.
            </p>
            <p className="mt-2 text-sm text-clara-gray italic">
              Sem complicação. Sem retrabalho. Sem surpresa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={scrollToDemo}
                className="bg-primary text-primary-foreground px-7 py-3 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com a Clara
              </button>
              <a
                href="#como-funciona"
                className="border border-border text-foreground px-7 py-3 rounded-xl text-base font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                Como funciona
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 ring-4 ring-primary/10">
              <img
                src={claraAvatar}
                alt="Clara — assistente de IA para regularização imobiliária"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <SectionTitle label="Passo a passo" title="Como funciona" subtitle="Três etapas simples para organizar sua regularização." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Descreva seu caso", desc: "Conte o que precisa regularizar: tipo de imóvel, localização e situação atual." },
              { step: "2", title: "Receba checklist e orientação", desc: "A Clara monta um checklist personalizado com documentos e próximos passos." },
              { step: "3", title: "Evite exigências e retrabalho", desc: "Antecipe erros comuns e protocole com segurança desde a primeira vez." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all group">
                <span className="absolute -top-4 left-6 w-9 h-9 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* O QUE A CLARA FAZ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle label="Funcionalidades" title="O que a Clara faz" subtitle="Ferramentas pensadas para profissionais que trabalham com regularização." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ClipboardCheck, title: "Monta checklist personalizado", desc: "Indica quais documentos e requisitos você precisa reunir para o seu tipo de processo." },
              { icon: MessageCircle, title: "Conversa em tempo real", desc: "Tire dúvidas por texto ou voz sobre regularização e licenciamento a qualquer momento." },
              { icon: MessageSquareWarning, title: "Explica exigências", desc: "Traduz \"comunique-se\" da prefeitura em ações claras e objetivas." },
              { icon: RouteIcon, title: "Orienta protocolo", desc: "Indica o fluxo correto para protocolar sem surpresas." },
              { icon: Target, title: "Orientação personalizada", desc: "Respostas adaptadas ao seu caso específico de regularização." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="flex gap-4 bg-card rounded-2xl p-6 border border-border hover:shadow-md hover:border-accent/30 transition-all">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <SectionTitle label="Por que a Clara?" title="Diferenciais" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Landmark, title: "Baseada em regras reais de prefeitura", desc: "Orientações fundamentadas na legislação e nos procedimentos vigentes." },
              { icon: ShieldCheck, title: "Foco em evitar erros comuns", desc: "Antecipa as falhas que mais geram comunique-se e retrabalho." },
              { icon: Target, title: "Orientação prática e objetiva", desc: "Respostas diretas, sem juridiquês desnecessário." },
              { icon: Users, title: "Pensada para profissionais técnicos", desc: "Arquitetos, engenheiros, advogados e gestores imobiliários." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="flex gap-4 items-start bg-card rounded-2xl p-6 border border-border">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEMONSTRAÇÃO */}
      <section id="demonstracao" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionTitle label="Demonstração" title="Converse com a Clara agora" subtitle="Experimente a assistente em tempo real. Pergunte sobre regularização, documentos ou processos." />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-3xl border border-border shadow-lg p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-primary/10 mb-6">
              <img src={claraAvatar} alt="Clara" className="w-full h-full object-cover" />
            </div>
            <p className="text-muted-foreground mb-6">
              Clique no botão de chat no canto inferior direito para iniciar uma conversa com a Clara.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-accent font-medium">
              <ArrowRight className="w-4 h-4 animate-bounce" />
              <span>Widget de voz disponível no canto inferior direito</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROVA / CONFIANÇA */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <SectionTitle label="Resultado" title="Mais previsibilidade no licenciamento" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              "Evite comunique-se e retrabalho",
              "Organize seu processo antes do protocolo",
              "Mais previsibilidade no licenciamento",
            ].map((text) => (
              <motion.div key={text} variants={fadeUp} className="flex items-center gap-3 bg-card rounded-xl p-5 border border-border">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 md:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comece agora com a Clara</h2>
          <p className="mt-4 text-muted-foreground">
            Regularize com confiança. Sem retrabalho, sem surpresa.
          </p>
          <button
            onClick={scrollToDemo}
            className="mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 cursor-pointer inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar atendimento
          </button>
        </motion.div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Clara</span>
          <p>© {new Date().getFullYear()} Clara — Assistente de Regularização Imobiliária</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground transition-colors cursor-pointer">Termos</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Contato</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
