import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Factory, Menu, X, Phone, MapPin, LogIn } from 'lucide-react';

const navLinks = [
  { label: 'Товары и услуги', href: '/#categories' },
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/contacts' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchor = (href: string) => {
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 h-16 transition-all duration-300 ${
        isScrolled
          ? 'bg-fsz-surface/90 backdrop-blur-xl shadow-card border-b border-fsz-border'
          : 'bg-fsz-surface border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-fsz-primary flex items-center justify-center">
            <Factory className="w-5 h-5 text-fsz-surface" />
          </div>
          <div className="hidden sm:block">
            <div className="text-fsz-text font-extrabold text-xl leading-tight tracking-tight">
              ФСЗ
            </div>
            <div className="text-fsz-text-light text-xs leading-tight">
              фабрика строительных заготовок
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') && isHome ? (
              <button
                key={link.label}
                onClick={() => handleAnchor(link.href)}
                className="nav-link text-fsz-text font-medium text-[15px] bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="nav-link text-fsz-text font-medium text-[15px]"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right: Contact + Login */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <div className="flex flex-col items-end gap-0.5">
            <a
              href="tel:+74951234567"
              className="flex items-center gap-1.5 text-fsz-text font-semibold text-sm hover:text-fsz-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +7 (495) 123-45-67
            </a>
            <div className="flex items-center gap-1.5 text-fsz-text-light text-xs">
              <MapPin className="w-3 h-3" />
              2-й шоссейный переулок, 21
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-fsz-primary text-fsz-surface text-sm font-medium rounded-md hover:bg-fsz-primary-hover transition-colors">
            <LogIn className="w-4 h-4" />
            Войти
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-fsz-card transition-colors"
          aria-label="Меню"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-fsz-text" />
          ) : (
            <Menu className="w-5 h-5 text-fsz-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-fsz-surface border-t border-fsz-border shadow-elevated">
          <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              link.href.startsWith('/#') && isHome ? (
                <button
                  key={link.label}
                  onClick={() => {
                    handleAnchor(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-fsz-text font-medium text-base py-2 px-3 rounded-md hover:bg-fsz-card transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-fsz-text font-medium text-base py-2 px-3 rounded-md hover:bg-fsz-card transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="border-t border-fsz-border pt-3 mt-1 flex flex-col gap-2">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-fsz-text font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-fsz-primary" />
                +7 (495) 123-45-67
              </a>
              <div className="flex items-center gap-2 text-fsz-text-light text-xs">
                <MapPin className="w-4 h-4" />
                2-й шоссейный переулок, 21
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
