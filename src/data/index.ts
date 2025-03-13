import { NavItem, Produto, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { id: 'inicio', titulo: 'Início', link: '#inicio' },
  { id: 'produtos', titulo: 'Produtos', link: '#produtos' },
  { id: 'sobre', titulo: 'Sobre', link: '#sobre' },
  { id: 'contato', titulo: 'Contato', link: '#contato' }
];

export const produtos: Produto[] = [
  {
    id: 1,
    imagem: 'produto1.jpg',
    titulo: 'Vaso Rústico',
    descricao: 'Vaso artesanal feito com técnicas tradicionais e acabamento natural'
  },
  {
    id: 2,
    imagem: 'produto2.jpg',
    titulo: 'Cesto Decorativo',
    descricao: 'Cesto trançado à mão com fibras naturais e design exclusivo'
  },
  {
    id: 3,
    imagem: 'produto3.jpg',
    titulo: 'Jogo de Cerâmica',
    descricao: 'Conjunto de peças em cerâmica com acabamento artesanal'
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    icon: 'fab fa-instagram',
    link: 'https://www.instagram.com/kakau_artesa/',
    label: 'Instagram'
  }
];

export const contatoInfo = {
  email: 'Kakau74artesa@gmail.com',
  telefone: '(21) 99805-9698',
  whatsapp: '5521998059698'
}; 