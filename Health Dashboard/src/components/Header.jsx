export default function Header() {
  return (
    <header className="flex items-center w-full justify-between whitespace-nowrap border-b border-solid border-b-[#243c47] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          HealthTrack
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {["Dashboard", "Reports", "Patients", "Settings"].map((link) => (
            <a
              key={link}
              className="text-white text-sm font-medium leading-normal"
              href="#"
            >
              {link}
            </a>
          ))}
        </nav>
        <button className="flex items-center justify-center h-10 px-2.5 bg-[#243c47] text-white rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06Z" />
          </svg>
        </button>
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9J5j6Uc1qjzPn1BAlmu7dK5GGfdlTBJtl1QTkSUf4hCP_E6BgRoBRhUpjAAqLj5BS1YyVgYhgMJLPQjsV-WHOlxF5n9ddJ0XLoZvkHpasrN6gXQ2TvYLuLRLWJY2bycaVuTtuREgBMu2vMBX9I0Q_5HPbBTEwK4B-DigPMGKMtWT5kTLj6Jh6rhbSu0xek-bvhhbaE2REpcE8Vj77g-pTIkolRz6cNb3adifD4lMVjbYMCqp7eOsEl861JFF6onBv97ImeNsybYEU')",
          }}
        />
      </div>
    </header>
  );
}
