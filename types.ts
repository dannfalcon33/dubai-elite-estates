export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  description: string;
  details: {
    beds: number;
    baths: number;
    sqft: number;
    type: string;
  };
  images: string[];
}

export interface Realtor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentAmount: string;
  message: string;
}

export interface HeroContent {
  label: string;
  title: {
    main: string;
    sub: string;
  };
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  navigation: {
    brand: {
      main: string;
      sub: string;
    };
    cta: string;
    compare: string;
  };
}

export interface AboutContent {
  label: string;
  title: {
    main: string;
    sub: string;
  };
  description: {
    p1: string;
    p2: string;
  };
  features: {
    security: {
      title: string;
      desc: string;
    };
    yields: {
      title: string;
      desc: string;
    };
  };
  button: string;
}

export interface PropertiesContent {
  label: string;
  title: string;
  description: string;
  cta: string;
}

export interface RealtorsContent {
  label: string;
  title: string;
  cta: string;
}

export interface FooterContent {
  brand: {
    main: string;
    sub: string;
  };
  tagline: string;
  copyright: string;
}

export interface ModalContent {
  form: {
    title: string;
    subtitle: string;
    submit: string;
    labels: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      investment: string;
      message: string;
    };
  };
  success: {
    title: string;
    message: string;
    button: string;
  };
}
