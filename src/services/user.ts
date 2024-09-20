


type UserInfo = {
    id: string;
    name: string;
    email: string;
}

export const fetchUserInfo = async (userId: string) => {
    const res = await fetch(`/user/info?userId=${userId}`);
    const data = await res.json();
    return data as UserInfo;
};