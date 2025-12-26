// /src/app/(app)/(docs)/components/page.tsx
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  { id: "p1", title: "Project Alpha", description: "A short description of Project Alpha.", href: "/projects/alpha" },
  { id: "p2", title: "Project Beta", description: "A short description of Project Beta.", href: "/projects/beta" },
  { id: "p3", title: "Project Gamma", description: "A short description of Project Gamma.", href: "/projects/gamma" },
];

export default function Page() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      <h1 style={{ marginBottom: 12 }}>My Projects</h1>
      <p style={{ marginBottom: 20, color: "#555" }}>Showcasing three of my projects. Click a card to view details.</p>

      <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, listStyle: "none", padding: 0, margin: 0 }}>
        {projects.map((p) => (
          <li key={p.id} style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
            <h2 style={{ margin: "0 0 8px 0", fontSize: 18 }}>{p.title}</h2>
            <p style={{ margin: "0 0 12px 0", color: "#666" }}>{p.description}</p>
            <Link href={p.href} style={{ color: "#0366d6", textDecoration: "none", fontWeight: 600 }}>
              View project →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
