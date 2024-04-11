import { ExternalLink, Link2 } from "lucide-react"


export const Link = ({ href = '#', ...rest }) => {
    return (
      <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...rest}
            className={`flex ${rest.className}`}
          >
        {rest.children}
        <ExternalLink size={12} />
        </a>
    )
  }
