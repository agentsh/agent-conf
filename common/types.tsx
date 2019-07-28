import {Interface} from 'readline';

export type RichTextType = [
  {
    type: string;
    text: string;
    spans: [object[]];
  }
];
export interface ImageType {
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
  alt: string | null;
  copyright: string | null;
}
export interface SpeakerType {
  name: string;
  works_on?: string;
  company?: string;
  twitter?: string;
  github?: string;
  email?: string;
  foto?: ImageType;
  bio?: RichTextType;
  _meta: {slug: string};
}
export interface SpeakersType {
  speakers: [{speaker: SpeakerType}];
}
export type TalkTypeType = 'Talk' | 'Keynote' | 'Lightning Talk' | 'Break' | 'Unconference';

export interface TalkType {
  start_time: string;
  talk_title: string;
  type: TalkTypeType;
  description: RichTextType;
  speaker: SpeakerType;
  speaker_2: SpeakerType;
  video?: WebLink;
}

export interface TalksType {
  date: string;
  slots: TalkType[];
}
export interface WorkshopType {
  start_time: string;
  end_time: string;
  workshop_title: string;
  description: RichTextType;
  speaker: SpeakerType;
  speaker2: SpeakerType;
}
export interface WorkshopsType {
  date: string;
  slots: WorkshopType[];
}

export interface WebLink {
  url: string;
}
export interface BannerType {
  headline?: string;
  small_headline?: string;
  action?: string;
  action_link?: WebLink;
  content?: RichTextType;
  foto: ImageType;
}

export interface HomepageType {
  header_background: ImageType;
  header_small_headline: string;
  header_headline_row_1: string;
  header_headline_row_2: string;
  header_action: WebLink;
  header_action_text: string;
  header_action_description: string;
  about_small_headline: string;
  about_headline_row_1: string;
  about_headline_row_2: string;
  about_content_right: RichTextType;
  about_content_left: RichTextType;
  about_image: ImageType;
  meta_description: string;
  meta_title: string;
  meta_og_image: ImageType;
}

export interface SponsorType {
  name: string;
  logo: ImageType;
  url: WebLink;
}

export interface TeamType {
  headline_row_1: string;
  headline_row_2: string;
  twitter: string;
  github?: string;
  foto: ImageType;
  bio: RichTextType;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tito-widget': any;
    }
  }
}
