import { createClient } from 'contentful'

const client = createClient({
    space:'vo9kunri3hbj',
    accessToken:'HY-RxC3V-rliPNV-AasprOVxu5GwtlGR3cKDDuPoWsM ',
}) 

const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

 export const convertToManualDate = (date) => {
    const day = date.slice(8, 10);
    const monthNum =
      date.slice(5, 6) === "0" ? date.slice(6, 7) : date.slice(5, 7);
    console.log(date);
    const yr = date.slice(0, 4);
    const month = months[monthNum];
    return `${day} ${month}, ${yr}`;
  };

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