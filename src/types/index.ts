export interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

export interface LocationData {
  ip: string;
  location: {
    city: string;
    region: string;
    postalCode: string;
    timezone: string;
    lat: string;
    lng: string;
  };
  isp?: string;
  as?: {
    name: string;
  };
}

export interface InfoPanelProps {
  data: LocationData | null;
}
