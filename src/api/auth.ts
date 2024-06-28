const URL = import.meta.env.VITE_API_BASE_URL;

export function getAuthHeaders(token: string): Record<string, string> {
    return {
        authorization: `Bearer ${token}`,
    };
}

export const signIn = async (dni: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dni,password })
    });

    if (!response.ok) {
        throw new Error(`Login error: ${response.statusText}`);
    }

    const data: AuthResponse = await response.json();
    return data;
}

interface ForgotPasswordResponse {
    message: string;
}

export const forgotPassword = async (dni: string): Promise<ForgotPasswordResponse> => {
    const response = await fetch(`${URL}/password/forgot`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dni })
    });

    if (!response.ok) {
        throw new Error(`Forgot password error: ${response.statusText}`);
    }

    const data: ForgotPasswordResponse = await response.json();
    return data;
}

export const resetPassword = async (
    token: string, 
    password: string, 
    password_confirmation: string
): Promise<ForgotPasswordResponse> => {
    const response = await fetch(`${URL}/password/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, password, password_confirmation })
    });

    if (!response.ok) {
        throw new Error(`Reset password error: ${response.statusText}`);
    }

    const data: ForgotPasswordResponse = await response.json();
    return data;
}
