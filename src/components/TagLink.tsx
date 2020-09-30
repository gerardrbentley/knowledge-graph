import * as React from 'react'
import { Link } from 'gatsby'

interface TagLinkProps {
    tagName: string
    number?: number
}

const stringToColor: ((inputString: string) => [string, string]) = (inputString) => {
    let hash = 0
    for (let i = 0; i < inputString.length; i++) {
        hash = inputString.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = '#'
    let rgb = []
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF
        rgb.push(value)
        color += ('00' + value.toString(16)).substr(-2)
    }
    // http://stackoverflow.com/a/3943023/112731

    let textColor = (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) > 186
        ? '#000000'
        : '#FFFFFF'
    return [color, textColor]
}

export const TagLink: React.FunctionComponent<TagLinkProps> = ({ tagName, number }) => {
    const [hexTagColor, textColor] = stringToColor(tagName)
    const linkText = number ? `${tagName} (${number})` : tagName
    return (
        <Link style={{
            backgroundColor: hexTagColor,
            color: textColor
        }} className="tag-link" to={`/tags/${tagName.replace(/\s+/g, '_').toLowerCase()}`}>
            {linkText}
        </Link>
    )
}

export default TagLink