import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Fintech',
    description: 'Professional Fintech services.'
};

export default function Page() {
    return <Client />;
}
