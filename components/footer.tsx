import React from "react";

export function Footer() {
  return (
    <footer className="py-8 border-t ">
      <div className="container mx-auto px-4">
        <div className="mt-2 pt-2 text-center">
          <p className="text-xs text-accent-foreground mb-2">
            This is a fan-made website with no official affiliation to Ado or
            her management.
          </p>
          <p className="text-xs text-accent-foreground">
            &copy; {new Date().getFullYear()} Ado Fan Tribute. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
