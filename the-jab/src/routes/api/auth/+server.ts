import jose from "jose";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";


export const POST : RequestHandler = async ({ url, request }) => {
    if (!env.ACCESS_TOKEN_SECRET || !env.REFRESH_TOKEN_SECRET){
        throw error(500, "Missing token ENV variables");
    }
    return json({worked: "yes"});
}