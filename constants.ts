import { NavItem, ServiceItem, TestimonialItem, CompanyStat } from './types';
import { Scissors, Sparkles, Droplet, Palette, Calendar, Heart } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'O Salão', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Agendamento', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Corte & Styling',
    description: 'Design de cortes personalizados que valorizam o formato do seu rosto e estilo de vida.',
    icon: Scissors,
  },
  {
    id: 2,
    title: 'Coloração Especializada',
    description: 'Técnicas modernas de mechas, balayage e coloração global para iluminar sua beleza.',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Spa & Estética Facial',
    description: 'Tratamentos rejuvenescedores, limpeza de pele profunda e hidratação de luxo.',
    icon: Droplet,
  },
  {
    id: 4,
    title: 'Manicure & Pedicure',
    description: 'Cuidado completo para mãos e pés, com esmaltação em gel e nail art delicada.',
    icon: Sparkles,
  },
  {
    id: 5,
    title: 'Dia da Noiva',
    description: 'Um pacote exclusivo para cuidar de você no dia mais especial da sua vida.',
    icon: Heart,
  },
  {
    id: 6,
    title: 'Pacotes Mensais',
    description: 'Planos de assinatura para manter sua rotina de beleza sempre em dia.',
    icon: Calendar,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Juliana Costa',
    role: 'Cliente há 3 anos',
    company: '',
    quote: 'O ambiente é acolhedor e a equipe é fantástica. Sempre saio me sentindo renovada e mais confiante.',
    avatarUrl: 'https://picsum.photos/seed/juli/150/150',
  },
  {
    id: 2,
    name: 'Patricia Lima',
    role: 'Advogada',
    company: '',
    quote: 'Profissionalismo impecável. O corte ficou exatamente como eu queria, e o atendimento é de primeira classe.',
    avatarUrl: 'https://picsum.photos/seed/paty/150/150',
  },
  {
    id: 3,
    name: 'Mariana Alves',
    role: 'Empresária',
    company: '',
    quote: 'Meu refúgio semanal. O cuidado com os detalhes e a qualidade dos produtos fazem toda a diferença.',
    avatarUrl: 'https://picsum.photos/seed/mari/150/150',
  },
];

export const STATS: CompanyStat[] = [
  { value: '+10', label: 'Anos de História' },
  { value: '5k+', label: 'Clientes Atendidas' },
  { value: '15', label: 'Especialistas' },
  { value: '100%', label: 'Produtos Premium' },
];