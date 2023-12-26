import {JSX} from "react";

export type SocialItemName = 'LinkedIn' | 'Instagram' | 'FaceBook' | 'GitHub' | 'Upwork';

export interface ISocialMediaItem {
    id: string | number,
    url: string,
    label: SocialItemName,
    icon?: JSX.Element
}