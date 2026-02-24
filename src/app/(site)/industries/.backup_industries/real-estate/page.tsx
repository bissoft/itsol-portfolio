import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Real Estate',
    description: 'Professional Real Estate services.'
};

export default function Page() {
    return <Client />;
}
