

export interface MarkdownProps {
    options?: Record<string, unknown>;
    children: string;
    className?: string;
}


export interface JourneyCardProps
{
    title: string;
    description?: string;
    image?: ImageProps;
    index: number;
  }