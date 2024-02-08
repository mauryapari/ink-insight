import { clsx } from "clsx"
import { twMerge } from "tailwind-merge";
import { Remarkable } from 'remarkable';

const md = new Remarkable();

md.set({
  html: true,
  breaks: true,
})

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function createSlug(title) {
  return title.toLowerCase().replace(/ /g, "-").replace('/[^\w-]+/g', "");
}

export function renderMarkdownToHTML(markdown) {
  const renderHTML =  md.render(markdown);
  return {__html: renderHTML};
}

export function ISOtoReadableDate(date) {
  return `${new Intl.DateTimeFormat("en-US", {month: "long"}).format(date)} ${date.getDate()}, ${date.getFullYear()}`
}