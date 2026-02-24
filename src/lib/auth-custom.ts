import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "itsol-cms-secret-key-change-this-in-env";
const key = new TextEncoder().encode(process.env.JWT_SECRET || secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(user: any) {
  // Create the session
  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  (await cookies()).set("admin-session", session, {
    expires,
    httpOnly: true,
    secure: true,
  });
}

export async function logout() {
  // Destroy the session
  (await cookies()).set("admin-session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = (await cookies()).get("admin-session")?.value;
  if (!session) return null;
  try {
    return await decrypt(session);
  } catch (err) {
    return null;
  }
}
