

export interface CertificateProps {
    name: string;
    issuedDate?: string;
    src: string;
    link: string;
  }

  export interface ProjectProps {
    name: string;
    description?: string;
    src?: string;
    link: string;
  }

  export interface ProjectCarouselProps {
    projects: ProjectProps[];
    autoplay: boolean;
    carouselBasis?: string;

    delay?: number;
  }