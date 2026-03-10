export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-border">
      <div className="max-w-[var(--max)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-[26px] h-[26px] bg-accent rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <path d="M4.5 2.5C4.5 2.5 3.5 3 3.5 5.5C3.5 8 5.5 10.5 8 13C10.5 10.5 12.5 8 12.5 5.5C12.5 3 11.5 2.5 11.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 6.5C6 6.5 6.5 6 8 6C9.5 6 10 6.5 10 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="8" cy="4" r="1" fill="white" />
                  <path d="M8 8.5V11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[15px] font-semibold text-text">OpenLine</span>
            </div>
            <p className="text-sm text-text-3 leading-relaxed max-w-[260px]">
              AI-powered call answering for small businesses. Never miss another call.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-4">Product</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#features" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Pricing</a>
              <a href="#industries" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Industries</a>
              <a href="#demo" className="text-sm text-text-2 hover:text-text no-underline transition-colors">How It Works</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <a href="/blog-how-ai-answering-works.html" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Blog</a>
              <a href="mailto:josh@withopenline.com" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Contact</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-text-3 uppercase tracking-wider mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <a href="/privacy.html" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Privacy Policy</a>
              <a href="/terms.html" className="text-sm text-text-2 hover:text-text no-underline transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-text-3">&copy; 2026 OpenLine. All rights reserved.</span>
          <a href="mailto:josh@withopenline.com" className="text-xs text-text-3 hover:text-text no-underline transition-colors">
            josh@withopenline.com
          </a>
        </div>
      </div>
    </footer>
  );
}
