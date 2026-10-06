import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import { menuData } from '../data/menuData.js';

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MapsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L3 21z" />
      <path d="M9.5 9.5c.2 2 2 4.3 4 5 .4.1.8 0 1.1-.3l.7-.8c.2-.2.5-.3.8-.2l2.1.7c.4.1.6.6.5 1-.3 1.3-1.7 2.3-3.1 2.1C11.3 16.5 7.5 12.7 7 8.4c-.2-1.4.8-2.8 2.1-3.1.4-.1.9.1 1 .5l.7 2.1c.1.3 0 .6-.2.8l-.8.7c-.3.3-.4.7-.3 1.1Z" />
    </svg>
  );
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatPrice(price) {
  return `$${price.toLocaleString('es-CO')}`;
}

function ImagePlaceholder({ className = 'h-24 w-24', iconClassName = 'h-7 w-7' }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-[#2A1D16] shadow-placeholder ${className}`}
      aria-hidden="true"
    >
      <Utensils className={`${iconClassName} text-bronze`} strokeWidth={1.4} />
    </div>
  );
}

function MenuImage({ image, alt, expanded = false }) {
  const [status, setStatus] = useState('pending');
  const imgRef = useRef(null);
  const src = `${import.meta.env.BASE_URL}images/menu/${image}`;

  useEffect(() => {
    setStatus('pending');
    const el = imgRef.current;
    if (!el) return;
    if (el.complete) {
      setStatus(el.naturalWidth > 0 ? 'loaded' : 'error');
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-[#2A1D16] ${
        expanded ? 'aspect-[4/3] w-full rounded-lg' : 'h-24 w-24 shrink-0 rounded-md'
      }`}
    >
      {status !== 'loaded' ? (
        <ImagePlaceholder
          className="absolute inset-0 h-full w-full rounded-[inherit]"
          iconClassName={expanded ? 'h-10 w-10' : 'h-7 w-7'}
        />
      ) : null}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={expanded ? 640 : 96}
        height={expanded ? 480 : 96}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`absolute inset-0 h-full w-full object-cover ${
          status === 'loaded' ? 'opacity-100' : 'pointer-events-none hidden'
        }`}
      />
    </div>
  );
}

function ItemDetails({ item, compact = false }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-gold text-shadow-gold">
          {item.name}
        </h3>
        <p className="shrink-0 font-display text-sm font-semibold tracking-wide text-bronze text-shadow-bronze">
          {formatPrice(item.price)}
        </p>
      </div>
      {item.description ? (
        <p
          className={`mt-1 text-[0.8rem] leading-relaxed text-beige/80 ${
            compact ? 'line-clamp-2' : ''
          }`}
        >
          {item.description}
        </p>
      ) : null}
      {item.options ? (
        <p className="mt-2 max-w-full break-words rounded-md border border-neon/20 bg-neon/10 px-2 py-1 text-[0.7rem] italic leading-relaxed text-ochre">
          {item.options}
        </p>
      ) : null}
    </div>
  );
}

function MenuItemCard({ item, expanded, onToggle }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!expanded || !cardRef.current) return;
    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [expanded]);

  return (
    <article
      ref={cardRef}
      className={`scroll-mt-28 overflow-hidden rounded-xl border bg-espresso-800/40 shadow-glow-subtle transition ${
        expanded ? 'border-neon/35 shadow-glow-neon' : 'border-bronze/15'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="w-full p-3 text-left"
      >
        {expanded ? (
          <div>
            <MenuImage image={item.image} alt={item.name} expanded />
            <div className="mt-3">
              <ItemDetails item={item} />
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <MenuImage image={item.image} alt={item.name} />
            <ItemDetails item={item} compact />
          </div>
        )}
      </button>
    </article>
  );
}

const MAPS_URL =
  'https://www.google.com/maps/place/B3+HOUSE+-+BRUNCH+-+BURGER+-+BAR/@6.164561,-75.583347,1140m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e4683f382f323f1:0x2392e8c71ac67f0f!8m2!3d6.164561!4d-75.583347!16s%2Fg%2F11z7hvf1xj!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/b3house_', icon: InstagramIcon },
  { label: 'Cómo llegar', href: MAPS_URL, icon: MapsIcon },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/573209169434?text=Hola,%20tengo%20hambre',
    icon: WhatsAppIcon,
  },
];

export default function DigitalMenu() {
  const categories = useMemo(
    () =>
      menuData.categories.map((category) => ({
        ...category,
        id: slugify(category.name),
      })),
    [],
  );

  const [activeId, setActiveId] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const navRef = useRef(null);
  const pillRefs = useRef({});
  const activeCategory = categories.find((category) => category.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    const nav = navRef.current?.querySelector('[data-pills]');
    const pill = pillRefs.current[activeId];
    if (!nav || !pill) return;

    const navRect = nav.getBoundingClientRect();
    const pillRect = pill.getBoundingClientRect();
    const nextLeft =
      nav.scrollLeft + (pillRect.left - navRect.left) - navRect.width / 2 + pillRect.width / 2;

    nav.scrollTo({ left: nextLeft, behavior: 'smooth' });
  }, [activeId]);

  const openCategory = (id) => {
    setActiveId(id);
    setExpandedItem(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeCategory = () => {
    setActiveId(null);
    setExpandedItem(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const swipeStart = useRef(null);

  const goToNeighborCategory = (direction) => {
    const index = categories.findIndex((category) => category.id === activeId);
    if (index < 0) return;
    const next = categories[index + (direction === 'next' ? 1 : -1)];
    if (!next) return;
    openCategory(next.id);
  };

  const onCategoryPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const onCategoryPointerUp = (event) => {
    if (!swipeStart.current) return;
    const dx = event.clientX - swipeStart.current.x;
    const dy = event.clientY - swipeStart.current.y;
    swipeStart.current = null;
    if (Math.abs(dx) < 56 || Math.abs(dx) <= Math.abs(dy) * 1.25) return;
    goToNeighborCategory(dx < 0 ? 'next' : 'prev');
  };

  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-espresso ambient-bg">
      <div className="matte-texture pointer-events-none absolute inset-0" />

      {!activeCategory ? (
        <>
          <header className="relative z-10 px-5 pb-6 pt-8 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ochre/80">BRUNCH - BURGER - BAR</p>
            <h1 className="mt-1 font-display text-5xl font-semibold text-gold text-shadow-gold">
              <span className="tracking-[0.08em]">B3</span>
              <span className="tracking-[0.22em]"> House</span>
            </h1>
            <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-neon to-transparent shadow-glow-neon" />
            <p className="mt-3 text-xs tracking-[0.22em] text-beige/60 uppercase">Menú digital</p>

            <div className="mt-5 flex items-center justify-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bronze/50 bg-transparent text-bronze transition hover:border-neon hover:text-neon hover:shadow-glow-neon"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </header>

          <main className="relative z-10 px-4 pb-16">
            <p className="mb-3 px-1 text-[0.7rem] uppercase tracking-[0.22em] text-ochre/70">Categorías</p>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => openCategory(category.id)}
                  className="flex w-full items-center gap-3 rounded-xl border border-bronze/20 bg-espresso-800/40 px-4 py-3.5 text-left shadow-glow-subtle transition hover:border-neon/40 hover:shadow-glow-neon"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#2A1D16] text-bronze shadow-placeholder">
                    <Utensils className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold text-gold text-shadow-gold">
                      {category.name}
                    </span>
                    <span className="mt-0.5 block text-[0.7rem] tracking-wide text-beige/55">
                      {category.items.length} {category.items.length === 1 ? 'opción' : 'opciones'}
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-bronze" strokeWidth={1.6} />
                </button>
              ))}
            </div>
          </main>
        </>
      ) : (
        <>
          <header className="sticky top-0 z-20 border-b border-neon/15 bg-espresso/94 backdrop-blur-md">
            <div className="flex items-center gap-2 px-3 py-2.5">
              <button
                type="button"
                onClick={closeCategory}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bronze/40 text-bronze transition hover:border-neon hover:text-gold"
                aria-label="Volver al menú"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.6} />
              </button>
              <div className="min-w-0 flex-1 text-center">
                <button
                  type="button"
                  onClick={closeCategory}
                  className="font-display text-xl font-semibold tracking-[0.12em] text-gold text-shadow-gold"
                  aria-label="Volver al menú"
                >
                  B3 House
                </button>
              </div>
              <span className="w-9" aria-hidden="true" />
            </div>

            <nav ref={navRef} aria-label="Categorías del menú">
              <div data-pills className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
                {categories.map((category) => {
                  const isActive = activeId === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      ref={(node) => {
                        pillRefs.current[category.id] = node;
                      }}
                      onClick={() => openCategory(category.id)}
                      className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs tracking-wide transition ${
                        isActive
                          ? 'border-neon bg-neon/15 text-gold shadow-glow-neon'
                          : 'border-bronze/30 bg-transparent text-bronze hover:border-neon/60 hover:text-gold'
                      }`}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </nav>
          </header>

          <main
            className="relative z-10 px-4 pb-16 pt-6 touch-pan-y"
            onPointerDown={onCategoryPointerDown}
            onPointerUp={onCategoryPointerUp}
            onPointerCancel={() => {
              swipeStart.current = null;
            }}
          >
            <div className="mb-4">
              <h2 className="font-display text-2xl font-semibold tracking-wide text-gold text-shadow-gold">
                {activeCategory.name}
              </h2>
              <p className="mt-1 text-[0.7rem] tracking-wide text-beige/55">
                {activeCategory.items.length} {activeCategory.items.length === 1 ? 'opción' : 'opciones'}
              </p>
            </div>
            <div className="space-y-3">
              {activeCategory.items.map((item) => (
                <MenuItemCard
                  key={`${activeCategory.id}-${item.name}`}
                  item={item}
                  expanded={expandedItem === item.name}
                  onToggle={() =>
                    setExpandedItem((current) => (current === item.name ? null : item.name))
                  }
                />
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
