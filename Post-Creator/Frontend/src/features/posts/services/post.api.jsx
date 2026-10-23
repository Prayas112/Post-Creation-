import axios from "axios";

const api = axios.create({
  baseURL: "https://post-creation-un36.onrender.com",
  withCredentials: true,
});

export async function getfeed() {
  const response = await api.get("/api/posts/feed");
  return response.data;
}

export async function createpost(imgFile, caption, onProgress) {
  const formdata = new FormData();

  formdata.append("image", imgFile);
  formdata.append("caption", caption);

  const response = await api.post("/api/posts", formdata, {
    onUploadProgress: (progressEvent) => {
      const percent = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );

      onProgress(percent);
    },
  });

  return response.data;
}

export async function likepost(postid) {
  const response = await api.post("/api/posts/likes/" + postid);
  return response.data;
}

export async function unlikepost(postid) {
  const response = await api.post("/api/posts/unlike/" + postid);
  return response.data;
}