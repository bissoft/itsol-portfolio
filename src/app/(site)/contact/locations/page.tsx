import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Locations',
    description: 'Professional Locations services.'
};

export default function Page() {
    return <Client />;
}
