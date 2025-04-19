import { Server, Socket } from 'socket.io';
import prisma from '../../repositories/client.js';
import { getGroupsArray, groups } from '../../routes/socket.route.js';
import { ChatGroup } from '../../types/types.js';
export default function registerGroupHandlers(io: Server, socket: Socket, userId: string) {
    // createGroup
    socket.on('createGroup', async (newGroup: ChatGroup) => {
        // TODO: Create group in DB and add creator as a member
        await prisma.group.create({
            data: {
                id: newGroup.id,
                name: newGroup.name,
                members: {
                    connect: { id: userId },
                },
                creatorId: userId,
            },
        });
        socket.join(newGroup.id); // Join the group room
        groups.set(newGroup.id, newGroup);
        io.emit('groups', getGroupsArray());
    });

    // joinGroup
    socket.on('joinGroup', async ({ groupId, clientId, client }: { groupId: string; clientId: string; client: string }) => {
        // TODO: Add client to group in DB
        await prisma.group.update({
            where: { id: groupId },
            data: {
                members: {
                    connect: { id: clientId },
                },
            },
        });

        const group = groups.get(groupId);
        if (group) {
            group.members.push(client);
            group.memberIds.push(clientId);
        } else {
            console.log('Group not found');
            return;
        }
        groups.set(groupId, group);

        socket.join(groupId); // Join the group room
        io.emit('groups', getGroupsArray());
    });

    // leaveGroup
    socket.on('leaveGroup', async ({ groupId, groupName, clientId, client }: { groupId: string; groupName: string; clientId: string; client: string }) => {
        // TODO: Remove client from group in DB
        const group = groups.get(groupId);
        if (group) {
            group.members = group.members.filter((member) => member !== client);
            group.memberIds = group.memberIds.filter((id) => id !== clientId);
        } else {
            console.log('Group not found');
            return;
        }
        groups.set(groupId, group);
        await prisma.group.update({
            where: { id: groupId },
            data: {
                members: {
                    disconnect: { id: clientId },
                },
            },
        });
        socket.leave(groupName); // Leave the group room
        io.emit('groups', getGroupsArray());
    });

    // deleteGroup
    socket.on('deleteGroup', async ({ groupId }: { groupId: string; groupName: string; clientId: string }) => {
        groups.delete(groupId);
        await prisma.group.delete({
            where: { id: groupId },
        });
        socket.leave(groupId); // Leave the group room
        io.emit('groups', getGroupsArray());
    });

    // renameGroup
    socket.on('renameGroup', async ({ groupId, newName, clientId }: { groupId: string; newName: string; clientId: string }) => {
        const group = groups.get(groupId);
        if (group && group.creatorId == clientId) {
            group.name = newName;
            groups.set(groupId, group);
        }
        await prisma.group.update({
            where: { id: groupId },
            data: { name: newName },
        });
        io.emit('groupRenamed', { groupId, newName });
    });
}
