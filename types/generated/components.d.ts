import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    authorityName: Schema.Attribute.String;
    authorityRole: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    quote: Schema.Attribute.String;
  };
}

export interface HomeAdmissionProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_admission_processes';
  info: {
    displayName: 'admission-process';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    steps: Schema.Attribute.Component<'shared.step', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface HomeAnnouncements extends Struct.ComponentSchema {
  collectionName: 'components_home_announcements';
  info: {
    displayName: 'announcements';
  };
  attributes: {
    announcements: Schema.Attribute.Relation<
      'oneToMany',
      'api::announcement.announcement'
    >;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface HomePrograms extends Struct.ComponentSchema {
  collectionName: 'components_home_programs';
  info: {
    displayName: 'programs';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HomeStudentInformation extends Struct.ComponentSchema {
  collectionName: 'components_home_student_informations';
  info: {
    displayName: 'student-information';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    items: Schema.Attribute.Component<'shared.information-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedInformationItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_information_items';
  info: {
    displayName: 'information-items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'light']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'step';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.about': HomeAbout;
      'home.admission-process': HomeAdmissionProcess;
      'home.announcements': HomeAnnouncements;
      'home.banner': HomeBanner;
      'home.hero': HomeHero;
      'home.programs': HomePrograms;
      'home.student-information': HomeStudentInformation;
      'shared.image': SharedImage;
      'shared.information-items': SharedInformationItems;
      'shared.link': SharedLink;
      'shared.step': SharedStep;
    }
  }
}
