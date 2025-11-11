import type {RenderedContent} from 'astro:content';
import type {BlogPostConfig} from './content.config';

export interface Post {
  data: BlogPostConfig;
  rendered: RenderedContent;
}

export type PostData = BlogPostConfig;
