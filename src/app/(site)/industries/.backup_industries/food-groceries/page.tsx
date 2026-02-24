import { Metadata } from 'next';
import Client from './Client';

export const metadata: Metadata = {
    title: 'Food Groceries',
    description: 'Professional Food Groceries services.'
};

export default function Page() {
    return <Client />;
}
