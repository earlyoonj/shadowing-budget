import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../../utils/auth';
import { connectToDatabase } from '../../../utils/db';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return;
    }

    const data = req.body;

    const { email, password } = data;

    if (!email || !email.includes('@') || !password) {
        res.status(422).json({ message: 'Invalid email or password.' });
    }

    const client = await connectToDatabase();

    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
        res.status(422).json({ message: 'User exists already!' });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
        email: email,
        password: hashedPassword,
    });

    res.status(201).json({ message: 'Created user!' });
    client.close();
    // 에러 핸들링은 이전 몽고디비 강의에서..
}

export default handler;
