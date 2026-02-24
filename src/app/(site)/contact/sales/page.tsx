import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Sales',
    description: 'Professional Sales services.'
};

export default function Page() {
    return <Client />;
}
