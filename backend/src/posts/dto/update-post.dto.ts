export class UpdatePostDto {
    readonly title?: string;
    readonly content?: string;
    readonly tags?: string[];
    readonly images?: string[];
    readonly mainImage?: string;
    readonly isFeatured?: boolean;
}