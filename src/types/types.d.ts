// user.model.ts
export interface User {
    id: number;
    name: string;
    friends: Friend[];
  }
  
  // friend.model.ts
  export interface Friend {
    id: number;
    name: string;
    userId: number;
    user: User;
    entries: Entry[];
  }
  
  // entry.model.ts
  export interface Entry {
    id: number;
    title: string;
    content: string;
    friendId: number;
    friend: Friend;
    suggestion: Suggestion | null;
  }
  
  // suggestion.model.ts
  export interface Suggestion {
    id: number;
    entryId: number;
    entry: Entry;
    aiSuggestion: string;
  }
  