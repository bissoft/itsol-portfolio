import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Education Technology',
    description: 'Professional Education Technology services.'
};

export default function Page() {
    return <Client />;
}
