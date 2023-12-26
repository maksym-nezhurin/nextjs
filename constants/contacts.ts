import { ISocialMediaItem, SocialItemName } from "@/interfaces/socialMediaItem";

export const email: string = 'mnezhurin17@gmail.com';
export const socialList: Record<SocialItemName, ISocialMediaItem> = {
    LinkedIn: {
        id: 1,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/maksym-nezhurin-7602a959/',
    },
    GitHub: {
        id: 2,
        label: 'GitHub',
        url: 'https://github.com/maksym-nezhurin',
    },
    Upwork: {
        id: 4,
        label: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~010c15849251bb43c7',
    },
    Instagram: {
        id: 3,
        label: 'Instagram',
        url: 'https://www.instagram.com/',
    },
    FaceBook: {
        id: 4,
        label: "FaceBook",
        url: 'https://www.facebook.com/',
    }
};