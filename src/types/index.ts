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
    lat: number;
    lng: number;
  };
  isp?: string;
  as?: {
    name: string;
  };
}

export interface InfoPanelProps {
  data: LocationData | null;
}
