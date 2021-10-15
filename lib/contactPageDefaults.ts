import { GhostPostOrPage } from "./ghost"
import { ServiceConfig } from '@components/contact/ContactForm'

export interface ContactPage extends GhostPostOrPage {
  form_topics: string[]
  serviceConfig: ServiceConfig
}

export const defaultPage: ContactPage = {
  id: 'custom-page-contact',
  slug: 'contact',
  url: '/contact',
  title: 'İletişime Geçin',
  custom_excerpt: 'Görüş, öneri veya sorularınız için bizimle iletişime geçebilirsiniz!',
  form_topics: ['Bireysel Başvuru!', 'Kurumsal Başvuru!'],
  meta_title: 'Contact Us',
  meta_description: 'A contact form page.',
  html: '',
  serviceConfig: {
    url: '/api/v1/contact',
    contentType: 'application/json',
  },
  featureImage: {
    url: 'https://static.gotsby.org/v1/assets/images/gatsby-ghost-contact.png',
    dimensions: {
      width: 1040,
      height: 250
    }
  }
}
