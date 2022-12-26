import { MongoClient } from 'mongodb';
import { USERNAME, PASSWORD } from '../configs/password';

export async function connectToDatabase() {
    // NOTE: The password contains special characters should be URL-encoded.
    const client = await MongoClient.connect(
        `mongodb+srv://${USERNAME}:${PASSWORD}@shadowing.cfrbzpn.mongodb.net/?retryWrites=true&w=majority`
    );

    return client;
}