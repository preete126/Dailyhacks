// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "@/utils/http"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const create_user = (data)=>{
   return axios.post("/auth/signup",data)
}
export const login_user = (data)=>{
   return axios.post("/auth/login",data)
}