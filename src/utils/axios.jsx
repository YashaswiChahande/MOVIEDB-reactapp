import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers : {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWMyODMzY2MzZjk3NWVmZmM4ODE4OGNkNzYwNDgxOCIsIm5iZiI6MTczNzQ4MjI0My4xODIwMDAyLCJzdWIiOiI2NzhmZTAwMzQ0OWJiOTY4OGJhYWMzZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ca7w2W4eY-tUdLitVWVHqld0Ce-i3ysxOe56tb7NgBE'
      }
})

export default instance