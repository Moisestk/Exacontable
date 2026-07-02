export const CONTACT = {
  email: "info@exacontable.com",
  phone: "+593 97 883 5575",
  phoneHref: "tel:+593978835575",
  address: "La Aurora, calle Los Ceibos entre 3ra y 4ta este, Machala, El Oro, Ecuador",
  portalUrl: "https://exa.ofsercont.com/",
};

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#ventajas", label: "Ventajas" },
  { href: "#planes", label: "Planes y precios" },
  { href: "#contacto", label: "Contacto" },
];

export const FOOTER_LEGAL_LINKS = [
  { href: "#", label: "Términos y condiciones" },
  { href: "#", label: "Política de privacidad" },
  { href: "#", label: "Cookies" },
];

export const FOOTER_ACCOUNT_LINKS = [
  { href: "/mi-cuenta", label: "Iniciar sesión" },
  { href: "/mi-cuenta", label: "Registrarse" },
  { href: CONTACT.portalUrl, label: "Portal cliente" },
];

export type Plan = {
  name: string;
  price: number;
  docs: string;
  features: string[];
  highlighted?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Básico I",
    price: 15,
    docs: "100 documentos anuales",
    features: [
      "Facturas",
      "Comprobantes de retención",
      "Notas de crédito",
      "Guías de remisión",
      "Soporte técnico personalizado",
    ],
  },
  {
    name: "Básico II",
    price: 50,
    docs: "500 documentos anuales",
    features: [
      "Facturas",
      "Comprobantes de retención",
      "Notas de crédito",
      "Guías de remisión",
      "Soporte técnico personalizado",
    ],
  },
  {
    name: "Ideal",
    price: 70,
    docs: "1000 documentos anuales",
    features: [
      "Facturas",
      "Comprobantes de retención",
      "Notas de crédito",
      "Guías de remisión",
      "Soporte técnico prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Ilimitado",
    price: 100,
    docs: "Documentos ilimitados",
    features: [
      "Facturas",
      "Comprobantes de retención",
      "Notas de crédito",
      "Guías de remisión",
      "Soporte técnico prioritario 24/7",
    ],
  },
];
