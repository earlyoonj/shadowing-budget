import { useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

async function createUser(email: string, password: string) {
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'create user error');
    }

    return data;
}

function RegisterPage() {
    const { t, lang } = useTranslation();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
        try {
            const result = await createUser(email, password);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="controls">
                <label htmlFor="register-email">{t('register:email')}</label>
                <input
                    id="register-email"
                    type="email"
                    name="email"
                    ref={emailRef}
                ></input>
            </div>
            <div className="controls">
                <label htmlFor="register-email">password</label>
                <input
                    id="register-password"
                    type="password"
                    name="password"
                    ref={passwordRef}
                ></input>
            </div>
            <button>submit</button>
        </form>
    );
}

export default RegisterPage;
