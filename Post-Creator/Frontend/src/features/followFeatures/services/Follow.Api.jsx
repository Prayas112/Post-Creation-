import axios from "axios";

const api = axios.create({
  baseURL: "https://post-creation-un36.onrender.com",
  withCredentials: true,
});

export async function followuser(username){
    const response = await api.post("/api/user/follow/"+ username)
    return response.data
}
export async function unfollowuser(username){
    const response = await api.post("/api/user/unfollow/"+username)
    return response.data
}