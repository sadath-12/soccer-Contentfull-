import { createClient } from 'contentful'

const client = createClient({
    space: 'vo9kunri3hbj',
    accessToken: 'HY-RxC3V-rliPNV-AasprOVxu5GwtlGR3cKDDuPoWsM',
})

export const truncate = (text, slicingNum) => {
    if (text.length <= slicingNum) {
        return text
    } else {
        return `${text.slice(0, slicingNum)}...`
    }
}
export const turnToSlug = (text) => {
    let trimmed = text.trim()
    let converted = trimmed.replaceAll(' ', '-')
    return converted
}
export const slugToText = (text) => {
    let trimmed = text.trim()
    let converted = trimmed.replaceAll('-', ' ')
    return converted
}

export const getContentByType = async (content_type) => {
    const items = await client.getEntries({ content_type })
    return items
}

export const getContentById = async (url) => {
    const items = await client.getEntry(url)
    return items
}

export const getSlugByLink = async (link) => {
    const item = await getContentById(link)
    const slug = item.fields.slug
    return slug
}