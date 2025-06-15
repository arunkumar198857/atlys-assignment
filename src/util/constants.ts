import LikeIcon from '../assets/heart-icon.svg'
import CommentIcon from '../assets/comment-icon.svg'
import ShareIcon from '../assets/send-2-icon.svg'
import BoldIcon from '../assets/bold-icon.svg'
import ItalicIcon from '../assets/italic-icon.svg'
import UnderlineIcon from '../assets/underline-icon.svg'
import OrderedListIcon from '../assets/ordered-list-icon.svg'
import UnorderedListIcon from '../assets/unordered-list-icon.svg'
import QuoteIcon from '../assets/quote-icon.svg'
import ScriptIcon from '../assets/script-icon.svg'
import AddFilesIcon from '../assets/plus-icon.svg'
import MicrophoneIcon from '../assets/mic-icon.svg'
import CameraIcon from '../assets/camera-icon.svg'
import FeedOneThumb from '../assets/feed-1-thumb.svg';
import FeedTwoThumb from '../assets/feed-2-thumb.svg';
import FeedThreeThumb from '../assets/feed-3-thumb.svg';
import { InputActions, InputStatus, FooterActions } from './enums'
import { InputAction, IFeedTileProps, IUserCredentials } from './interfaces'

export const INPUT_ACTIONS: Array<InputAction> = [
    {
        id: InputActions.BOLD,
        title: "BOLD",
        icon: BoldIcon,
        action: InputActions.BOLD,
        status: InputStatus.ACTIVE
    },
    {
        id: InputActions.ITALIC,
        title: "ITALIC",
        icon: ItalicIcon,
        action: InputActions.ITALIC
    },
    {
        id: InputActions.UNDERLINE,
        title: "UNDERLINE",
        icon: UnderlineIcon,
        action: InputActions.UNDERLINE
    },
    {
        action: InputActions.DIVIDER,
        id: InputActions.DIVIDER,
        title: "DIVIDER",
    },
    {
        id: InputActions.ORDERED_LIST,
        title: "ORDERED_LIST",
        icon: OrderedListIcon,
        action: InputActions.ORDERED_LIST
    },
    {
        id: InputActions.UNORDERED_LIST,
        title: "UNORDERED_LIST",
        icon: UnorderedListIcon,
        action: InputActions.UNORDERED_LIST
    },
    {
        action: InputActions.DIVIDER,
        id: InputActions.DIVIDER,
        title: "DIVIDER",
    },
    {
        id: InputActions.QUOTE,
        title: "QUOTE",
        icon: QuoteIcon,
        action: InputActions.QUOTE
    },
    {
        id: InputActions.SCRIPT,
        title: "SCRIPT",
        icon: ScriptIcon,
        action: InputActions.SCRIPT
    },
];

export const STATUS_TILE_FOOTER_ACTIONS: Array<InputAction> = [
    {
        id: InputActions.ADD_FILES,
        title: "ADD_FILES",
        icon: AddFilesIcon,
        action: InputActions.ADD_FILES,
        status: InputStatus.ACTIVE
    },
    {
        id: InputActions.MICROPHONE,
        title: "MICROPHONE",
        icon: MicrophoneIcon,
        action: InputActions.MICROPHONE,
    },
    {
        id: InputActions.CAMERA,
        title: "CAMERA",
        icon: CameraIcon,
        action: InputActions.CAMERA,
    },
]


export const EMOTICONS_LIST: Array<string> = ["😄", "🙃", "🥰", "😛"];

export const USER_THUMBNAILS: Array<string> = [FeedOneThumb, FeedTwoThumb, FeedThreeThumb]

export const FEED_TILE_FOOTER_ACTIONS: Array<InputAction> = [
    {
        id: FooterActions.LIKE,
        title: "LIKE",
        icon: LikeIcon,
        action: FooterActions.LIKE,
    },
    {
        id: FooterActions.COMMENT,
        title: "COMMENT",
        icon: CommentIcon,
        action: FooterActions.COMMENT,
    },
    {
        id: FooterActions.SHARE,
        title: "SHARE",
        icon: ShareIcon,
        action: FooterActions.SHARE,
    },
]

export const DEFAULT_FEED_STATE: Array<IFeedTileProps> = [
    {
        userThumbnail: FeedOneThumb,
        username: "Theresa Webb",
        statusUpdatedAt: "5 mins ago",
        statusEmoticon: "🥴",
        textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
        userThumbnail: FeedTwoThumb,
        username: "John Doe",
        statusUpdatedAt: "5 mins ago",
        statusEmoticon: "🤞",
        textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
        userThumbnail: FeedThreeThumb,
        username: "Jane Doe",
        statusUpdatedAt: "5 mins ago",
        statusEmoticon: "💀",
        textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
];

export const USER_DATA: Array<IUserCredentials> = [
    {
        username: 'demo@example.com',
        password: 'password123'
    },
    {
        username: 'test@user.com',
        password: 'testpass',
    }
];