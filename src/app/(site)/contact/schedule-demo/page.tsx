import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Schedule Demo',
    description: 'Professional Schedule Demo services.'
};

export default function Page() {
    return <Client />;
}
