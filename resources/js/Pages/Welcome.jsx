import BlogGrid from '@/components/BlogGrid';
import ItemList from '@/components/ItemList';
import Notification from '@/components/Notification';
import PricingCard from '@/components/PricingCard';
import Sidebar from '@/components/Sidebar';
import Testimonial from '@/components/Testimonial';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <div className='container mx-auto p-4 flex flex-wrap gap-y-4'>
            <div className="w-full">
                <Notification />
            </div>
            <Sidebar />
            <div className="container mx-auto px-4 w-10/12">
                <PricingCard />
                <Testimonial />
                <BlogGrid />
            </div>
        </div>
    );
}
