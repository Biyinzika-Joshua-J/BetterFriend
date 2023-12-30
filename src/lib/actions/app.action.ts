"use server";
import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCurrentUser = async () => {
  const { username } = await currentUser();
  if (username) return { username };
  return null;
};
export const createUser = async (name: string) => {
    const existingUser = await prisma.user.findFirst({
        where: {
          name,
        },
      });

  if (existingUser) {
   return "User already exists";
  }
  return prisma.user.create({
    data: {
      name,
    },
  });
};

export const getCurrentUserId = async (name: string) => {
    const user = await prisma.user.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
      },
    });
  
    if (user) {
      return user.id;
    }
  
    
    throw new Error('User not found');
  };

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export const updateUser = async (id: number, name: string) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};

// Friends
export const addFriend = async (name: string, userId: number) => {
  return prisma.friend.create({
    data: {
      name,
      userId,
    },
  });
};
export const getFriends = async (userId: number) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        friends: true,
      },
    });
  
    if (user) {
      return user.friends;
    }
  
    throw new Error('User not found');
  };


export const deleteFriend = async (id: number) => {
  return prisma.friend.delete({
    where: {
      id,
    },
  });
};

// Entries
export const addEntry = async (
  title: string,
  content: string,
  friendId: number
) => {
  return prisma.entry.create({
    data: {
      title,
      content,
      friendId,
    },
  });
};

export const deleteEntry = async (id: number) => {
  return prisma.entry.delete({
    where: {
      id,
    },
  });
};

export const getEntries = async (friendId: number) => {
    const friend = await prisma.friend.findUnique({
      where: {
        id: friendId,
      },
      include: {
        entries: true,
      },
    });
  
    if (friend) {
      return friend.entries;
    }
    throw new Error('Friend not found');
  };

// Search
export const searchFriends = async (searchStr: string) => {
  return prisma.friend.findMany({
    where: {
      name: {
        contains: searchStr,
      },
    },
  });
};

export const searchEntries = async (searchStr: string) => {
  return prisma.entry.findMany({
    where: {
      title: {
        contains: searchStr,
      },
    },
  });
};
