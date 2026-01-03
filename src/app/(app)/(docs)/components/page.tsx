// /src/app/(app)/(docs)/components/page.tsx
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  tag?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Project Alpha",
    description: "A short description of Project Alpha.",
    href: "/projects/alpha",
    tag: "Featured",
  },
  {
    id: "p2",
    title: "Project Beta",
    description: "A short description of Project Beta.",
    href: "/projects/beta",
  },
  {
    id: "p3",
    title: "Project Gamma",
    description: "A short description of Project Gamma.",
    href: "/projects/gamma",
    tag: "New",
  },
];

export default function Page(): JSX.Element {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        background:
          "linear-gradient(180deg, #0f172a 0%, rgba(15,23,42,0.9) 40%, rgba(250,250,255,0.02) 100%)",
        color: "#0b1220",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1100 }}>
        <header style={{ marginBottom: 28 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.05,
              background:
                "linear-gradient(90deg, #06b6d4 0%, #7c3aed 50%, #ff7eb6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 700,
            }}
          >
            My Projects
          </h1>
          <p
            style={{
              marginTop: 10,
              color: "rgba(11,18,32,0.7)",
              fontSize: 15,
              maxWidth: 780,
            }}
          >
            Showcasing a few highlighted pieces of work. Click any card to open
            the project details. Hover to preview the card motion and actions.
          </p>
        </header>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {projects.map((p) => (
            <li key={p.id} style={{ listStyle: "none" }}>
              <Link
                href={p.href}
                aria-label={`Open ${p.title}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)",
                  boxShadow:
                    "0 6px 30px rgba(2,6,23,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                  transform: "translateZ(0)",
                  padding: 18,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px) scale(1.01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0) scale(1)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Avatar / Illustration */}
                    <div
                      aria-hidden
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 12,
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.08))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "inset 0 -6px 24px rgba(8,12,20,0.03)",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "#7c3aed" }}
                      >
                        <path
                          d="M12 2L19 8V20H5V8L12 2Z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="rgba(124,58,237,0.08)"
                        />
                      </svg>
                    </div>

                    <div>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: 18,
                          color: "#071023",
                          fontWeight: 700,
                        }}
                      >
                        {p.title}
                      </h2>
                      <p
                        style={{
                          margin: "6px 0 0 0",
                          color: "rgba(7,16,35,0.65)",
                          fontSize: 13.5,
                          maxWidth: 420,
                        }}
                      >
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {p.tag ? (
                    <span
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))",
                        color: "#0b1220",
                        fontSize: 12,
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontWeight: 600,
                      }}
                    >
                      {p.tag}
                    </span>
                  ) : (
                    <div style={{ width: 24 }} />
                  )}
                </div>

                <div style={{ flexGrow: 1 }} />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 18,
                    gap: 12,
                  }}
                >
                  <div style={{ color: "rgba(7,16,35,0.55)", fontSize: 13 }}>
                    Learn more
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#ffffff",
                      background:
                        "linear-gradient(90deg, #06b6d4 0%, #7c3aed 60%, #ff7eb6 100%)",
                      padding: "8px 12px",
                      borderRadius: 10,
                      fontWeight: 700,
                      boxShadow: "0 6px 18px rgba(124,58,237,0.18)",
                      transform: "translateZ(0)",
                    }}
                  >
                    <span style={{ fontSize: 13 }}>Open</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
