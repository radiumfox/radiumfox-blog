export class CreatePostDto {
    readonly date: string;
    readonly title: string;
    readonly content: string;
    readonly tags: string[];
    readonly images: string[];

}