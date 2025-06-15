import { FooterActions, InputActions, InputStatus } from "./enums";

export interface InputAction {
    id: InputActions | FooterActions,
    action: InputActions | FooterActions,
    icon?: string,
    status?: InputStatus,
    title: string,
}

export interface IFeedTileProps {
    userThumbnail?: string;
    username: string;
    statusUpdatedAt: string;
    statusEmoticon: string;
    textContent: string;
}

export interface IUserCredentials {
    username: string;
    password: string;
}