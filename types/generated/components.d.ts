import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBrand extends Struct.ComponentSchema {
  collectionName: 'components_common_brand';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    accentText: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'>;
    primaryText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonContact extends Struct.ComponentSchema {
  collectionName: 'components_common_contact';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    addressLabel: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    emailLabel: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    phoneLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_info';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::strapi-plugin-iconhub.iconhub'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonCta extends Struct.ComponentSchema {
  collectionName: 'components_common_cta';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFooter extends Struct.ComponentSchema {
  collectionName: 'components_common_footer';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'common.contact', false>;
    copyright: Schema.Attribute.String & Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'common.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<'common.footer-section', true>;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_common_footer_section';
  info: {
    displayName: 'Footer Section';
  };
  attributes: {
    links: Schema.Attribute.Component<'common.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFormField extends Struct.ComponentSchema {
  collectionName: 'components_common_form_field';
  info: {
    displayName: 'Form Field';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_link';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonMilestone extends Struct.ComponentSchema {
  collectionName: 'components_common_milestone';
  info: {
    displayName: 'Milestone';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonNavigation extends Struct.ComponentSchema {
  collectionName: 'components_common_navigation';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.cta', false>;
    items: Schema.Attribute.Component<'common.link', true>;
    mobileToggleLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonNumberStat extends Struct.ComponentSchema {
  collectionName: 'components_common_number_stat';
  info: {
    displayName: 'Number Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_common_process_step';
  info: {
    displayName: 'Process Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    step: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonResult extends Struct.ComponentSchema {
  collectionName: 'components_common_result';
  info: {
    displayName: 'Result';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seo';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonStat extends Struct.ComponentSchema {
  collectionName: 'components_common_stat';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonTextItem extends Struct.ComponentSchema {
  collectionName: 'components_common_text_item';
  info: {
    displayName: 'Text Item';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_home_about_section';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.cta', false>;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph1: Schema.Attribute.Text & Schema.Attribute.Required;
    paragraph2: Schema.Attribute.Text & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'common.stat', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_section';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCta: Schema.Attribute.Component<'common.cta', false>;
    secondaryCta: Schema.Attribute.Component<'common.cta', false>;
    titleLine1: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine3: Schema.Attribute.String & Schema.Attribute.Required;
    trustStats: Schema.Attribute.Component<'common.number-stat', true>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_hero';
  info: {
    displayName: 'Home Hero';
  };
  attributes: {
    badgeText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCta: Schema.Attribute.Component<'common.cta', false>;
    secondaryCta: Schema.Attribute.Component<'common.cta', false>;
    statsLabel: Schema.Attribute.String & Schema.Attribute.Required;
    statsValue: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine1: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2Accent: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2Normal: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePortfolioSection extends Struct.ComponentSchema {
  collectionName: 'components_home_portfolio_section';
  info: {
    displayName: 'Portfolio Section';
  };
  attributes: {
    allProjectsLabel: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_services_section';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials_section';
  info: {
    displayName: 'Testimonials Section';
  };
  attributes: {
    dotLabelTemplate: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.brand': CommonBrand;
      'common.contact': CommonContact;
      'common.contact-info': CommonContactInfo;
      'common.cta': CommonCta;
      'common.footer': CommonFooter;
      'common.footer-section': CommonFooterSection;
      'common.form-field': CommonFormField;
      'common.link': CommonLink;
      'common.milestone': CommonMilestone;
      'common.navigation': CommonNavigation;
      'common.number-stat': CommonNumberStat;
      'common.process-step': CommonProcessStep;
      'common.result': CommonResult;
      'common.seo': CommonSeo;
      'common.stat': CommonStat;
      'common.text-item': CommonTextItem;
      'home.about-section': HomeAboutSection;
      'home.cta-section': HomeCtaSection;
      'home.hero': HomeHero;
      'home.portfolio-section': HomePortfolioSection;
      'home.services-section': HomeServicesSection;
      'home.testimonials-section': HomeTestimonialsSection;
    }
  }
}
