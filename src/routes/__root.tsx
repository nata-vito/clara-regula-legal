import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clara AI" },
      { name: "description", content: "Regularize seu imóvel com mais rapidez e menos erros. A Clara te guia passo a passo." },
      { name: "author", content: "Clara" },
      { property: "og:title", content: "Clara AI" },
      { property: "og:description", content: "Regularize seu imóvel com mais rapidez e menos erros. A Clara te guia passo a passo." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Clara AI" },
      { name: "twitter:description", content: "Regularize seu imóvel com mais rapidez e menos erros. A Clara te guia passo a passo." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/IR9B7ycX1GQBiJro1VXWYaBgcRw1/social-images/social-1775833660416-brain.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/IR9B7ycX1GQBiJro1VXWYaBgcRw1/social-images/social-1775833660416-brain.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/favicon.png?v=3" },
      { rel: "shortcut icon", href: "/favicon.ico?v=3" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
    scripts: [
      { src: "https://unpkg.com/@elevenlabs/convai-widget-embed", async: true, type: "text/javascript" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <ElevenLabsWidget />
    </>
  );
}

function ElevenLabsWidget() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: '<elevenlabs-convai agent-id="agent_5201knsvdm8yen0ajkgvpfr892zj"></elevenlabs-convai>',
      }}
    />
  );
}
