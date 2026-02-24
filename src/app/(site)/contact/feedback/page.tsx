import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Feedback',
    description: 'Professional Feedback services.'
};

export default function Page() {
    return <Client />;
}
