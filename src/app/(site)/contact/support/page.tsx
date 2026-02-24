import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Support',
    description: 'Professional Support services.'
};

export default function Page() {
    return <Client />;
}
