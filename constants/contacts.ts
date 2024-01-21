import { ISocialMediaItem, SocialNetworkItemName, WorkNetworkItemName } from "@/interfaces/socialMediaItem";
import {LinkedinIcon} from "@/app/icons/linkedIn";
import {InstagramIcon} from "@/app/icons/instagram";
import {FacebookIcon} from "@/app/icons/facebook";
import {GithubIcon} from "@/app/icons/github";
import {UpworkIcon} from "@/app/icons/upwork";

const NAME: string = 'Maksym';
const SURNAME: string = 'Nezhurin';
export const FULL_NAME: string = `${NAME} ${SURNAME}`;
export const email: string = 'mnezhurin17@gmail.com';
export const emailString: string = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Resume+Request&to=${email}&body=Hi+Max,%0A%0AMy+name+is+%3CYOUR_NAME%3E+and+I%27d+love+to+talk+to+you+about+%3CTOPIC_OF_INTEREST%3E.%0A%0AWould+you+be+able+to+send+me+a+copy+of+your+resume?%0A%0ABest,%0A%3CYOUR_NAME%3E%0A%3CYOUR_PHONE_NUMBER%3E%0A%3CYOUR_EMAIL%3E`;
export const phone: string = '+48571517594'
export const socialList: Record<SocialNetworkItemName, ISocialMediaItem> = {
    LinkedIn: {
        id: 1,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/maksym-nezhurin-7602a959/',
        icon: LinkedinIcon
    },
    Instagram: {
        id: 3,
        label: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: InstagramIcon
    },
    FaceBook: {
        id: 4,
        label: "FaceBook",
        url: 'https://www.facebook.com/',
        icon: FacebookIcon
    }
};

export const workNetworkList: Record<WorkNetworkItemName, ISocialMediaItem> = {
    GitHub: {
        id: 2,
        label: 'GitHub',
        url: 'https://github.com/maksym-nezhurin',
        icon: GithubIcon
    },
    Upwork: {
        id: 4,
        label: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~010c15849251bb43c7',
        icon: UpworkIcon
    }
}