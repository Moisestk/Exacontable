import {
  BarChart3,
  BookOpen,
  Clock,
  FileCheck2,
  Headset,
  Lock,
  Receipt,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import AdvantagesBanner from "./AdvantagesBanner";
import FeatureRow, { FeatureRowProps } from "./FeatureRow";

const ROWS: FeatureRowProps[] = [
  {
    eyebrow: "Visión integral",
    title: "Visión integral de tu negocio",
    description:
      "EXA no solo registra tus transacciones financieras, también te ofrece una visión completa de tu negocio en tiempo real.",
    visualIcon: BarChart3,
    items: [
      {
        icon: TrendingUp,
        title: "Indicadores en tiempo real",
        description:
          "Monitoriza tus KPIs y toma decisiones estratégicas basadas en datos precisos.",
      },
      {
        icon: FileCheck2,
        title: "Informes personalizados",
        description:
          "Balances, estados de resultados y análisis de costos a un clic de distancia.",
      },
      {
        icon: Sparkles,
        title: "Detecta oportunidades",
        description:
          "Identifica áreas de mejora y optimiza tus procesos financieros.",
      },
    ],
  },
  {
    eyebrow: "Eficiencia",
    title: "Ahorro de tiempo y dinero",
    description:
      "EXA automatiza tareas tediosas y repetitivas, como la conciliación bancaria, la facturación electrónica y la elaboración de informes.",
    visualIcon: Clock,
    dark: true,
    reverse: true,
    items: [
      {
        icon: Clock,
        title: "Libera tiempo valioso",
        description:
          "Enfócate en actividades más estratégicas para tu negocio.",
      },
      {
        icon: TrendingDown,
        title: "Menos costos operativos",
        description: "Reduce gastos en personal y papelería administrativa.",
      },
      {
        icon: Wallet,
        title: "Procesos más eficientes",
        description: "Mejora la eficiencia de tus procesos financieros.",
      },
    ],
  },
  {
    eyebrow: "Normativa",
    title: "Cumplimiento normativo",
    description:
      "EXA te ayuda a cumplir con todas las obligaciones fiscales y legales ecuatorianas.",
    visualIcon: Receipt,
    items: [
      {
        icon: Receipt,
        title: "Facturación electrónica",
        description:
          "Emite y gestiona tus comprobantes de forma segura, cumpliendo con la normativa vigente.",
      },
      {
        icon: FileCheck2,
        title: "Declaraciones de impuestos",
        description:
          "Prepara y presenta tus declaraciones de forma precisa y oportuna.",
      },
    ],
  },
  {
    eyebrow: "Confianza",
    title: "Seguridad y confiabilidad",
    description:
      "EXA te ofrece la máxima seguridad y confiabilidad para tus datos financieros.",
    visualIcon: ShieldCheck,
    dark: true,
    reverse: true,
    items: [
      {
        icon: ShieldCheck,
        title: "Respaldos automáticos",
        description:
          "Tus datos se respaldan en la nube; nunca los perderás.",
      },
      {
        icon: Lock,
        title: "Acceso seguro",
        description:
          "Solo tú y tus usuarios autorizados pueden acceder a tu información.",
      },
      {
        icon: FileCheck2,
        title: "Certificaciones de seguridad",
        description: "Cumplimos los estándares más exigentes del mercado.",
      },
    ],
  },
  {
    eyebrow: "Acompañamiento",
    title: "Soporte técnico de calidad",
    description:
      "EXA te ofrece un servicio de soporte técnico de calidad para ayudarte a resolver cualquier duda o problema.",
    visualIcon: Headset,
    items: [
      {
        icon: Headset,
        title: "Atención personalizada",
        description:
          "Un equipo de expertos resuelve tus dudas de forma ágil.",
      },
      {
        icon: Clock,
        title: "Horario amplio de atención",
        description: "Disponibilidad extendida para cuando más lo necesites.",
      },
      {
        icon: BookOpen,
        title: "Base de conocimientos",
        description:
          "Documentación y tutoriales siempre a tu disposición.",
      },
    ],
  },
];

export default function Advantages() {
  return (
    <>
      <AdvantagesBanner />
      {ROWS.map((row) => (
        <FeatureRow key={row.title} {...row} />
      ))}
    </>
  );
}
