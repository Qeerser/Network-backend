export interface ChatMessageDTO {
    id: string;
    content: string;
    from: string;
    fromId: string;
    isPrivate: boolean;
    to: string;
    toId: string;
    timestamp: number;
    image?: string;
    reactions: Record<
        string,
        Array<{
            id: string;
            name: string;
            timestamp: number;
        }>
    >;
    edited?: boolean;
    editedBy?: string;
}

export interface ChatGroup {
    id: string;
    name: string;
    members: string[];
    memberIds: string[];
    creator?: string;
    creatorId?: string;
    lastMessage?: {
        content: string;
        timestamp: number;
    };
    lastMessageSender?: string;
}

export interface UserType {
    id: string;
    name: string;
    socketId?: string;
    online: boolean;
}
