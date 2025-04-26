import React from "react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-accent-foreground">
            This is a fan-made website dedicated to celebrating the incredible
            artistry of Ado.
          </p>
          <p className="text-sm text-accent-foreground">
            We are not officially affiliated with Ado, her management, or
            Universal Music Japan.
          </p>
        </div>

        <div className="text-xs text-accent-foreground mt-6">
          &copy; {new Date().getFullYear()} Ado Fan Tribute — Powered by
          passion, not profit.
        </div>
      </div>
    </footer>
  );
}
