export type SocialNetworkItemName = 'LinkedIn' | 'Instagram' | 'FaceBook';
export type WorkNetworkItemName = 'GitHub' | 'Upwork';

export interface ISocialMediaItem {
    id: string | number,
    url: string,
    label: SocialNetworkItemName | WorkNetworkItemName,
    icon: any
}