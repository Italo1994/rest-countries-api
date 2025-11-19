"use client";

export function DarkModeToggle() {
  function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="cursor-pointer text-sm underline"
    >
      Ativar dark mode
    </button>
  );
}
