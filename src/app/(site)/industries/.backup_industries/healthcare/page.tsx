import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Healthcare',
    description: 'Professional Healthcare services.'
};

export default function Page() {
    return <Client />;
}
