export type Slide = {
    id: number;
    title: string;
    description: string;
    image: string;
    action: () => void;
}