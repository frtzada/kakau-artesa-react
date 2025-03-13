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
    imagem: require('../assets/images/produto1.jpg'),
    titulo: 'Filtro Artesanal',
    descricao: 'Filtro Artesanal feito com técnicas tradicionais e acabamento natural'
  },
  {
    id: 2,
    imagem: require('../assets/images/produto2.jpg'),
    titulo: 'Vaso decorativo',
    descricao: 'Vaso decorativo feito com técnicas tradicionais e acabamento natural'
  },
  {
    id: 3,
    imagem: require('../assets/images/produto3.jpg'),
    titulo: 'Moringa Artesanal',
    descricao: 'Moringa artesanal com acabamento artesanal'
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