import type { NextApiRequest, NextApiResponse } from 'next'
import methods from "micro-method-router";



export default methods({
        async patch(req:NextApiRequest, res:NextApiResponse) {
           res.send("cambiaste tu direccion");
        }
      })