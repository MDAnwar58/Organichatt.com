<?php
namespace App\Helper;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTToken
{
    static public function createToken($user_email, $user_id, $expriy_days)
    {
        $key = env('JWT_KEY');
        $payload = [
            'iss' => 'organichatt',
            'iat' => time(),
            'exp' => time() + 60 * 60 * 24 * $expriy_days,
            'userEmail' => $user_email,
            'userId' => $user_id,
        ];
        return JWT::encode($payload, $key, 'HS256');
    }
    static public function ReadToken($token)
    {
        try {
            if ($token == null) {
                return "unauthorized";
            } else {
                $key = env('JWT_KEY');
                return JWT::decode($token, new Key($key, 'HS256'));
            }
        } catch (\Throwable $th) {
            return "unauthorized";
        }
    }
}