type TButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warning' | 'light' | 'dark';

function MarqueeBtn({ text, href, variant } : { text: string, href: string, variant: TButtonVariant }) {

    
    return (
    <a href={href} type="button" className={`marquee-btn btn btn-${variant}`}>
        <span>{text}</span>
        <div className="marquee">
            <span>{text}</span>
            <span aria-hidden="true">{text}</span>
            <span aria-hidden="true">{text}</span>
        </div>
    </a>

    )
}

export default MarqueeBtn;