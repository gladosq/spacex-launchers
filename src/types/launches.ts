export interface ILaunch {
  fairings: null;
  links: ILinks;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: any[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: ICore[];
  id: string;
}

interface ICore {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

interface ILinks {
  patch: IPatch;
  reddit: IReddit;
  flickr: IFlickr;
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface IFlickr {
  small: any[];
  original: string[];
}

interface IPatch {
  small: string;
  large: string;
}

interface IReddit {
  campaign: string;
  launch: string;
  media: string;
  recovery: null;
}
