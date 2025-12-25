"use client";

export const Footer = () => {
    return (
        <footer className="py-8 text-center text-(--text-secondary) text-sm border-t border-(--border-color) bg-(--bg-main)">
            © {new Date().getFullYear()} Nay Lin Myat. All Rights Reserved.
        </footer>
    )
}
