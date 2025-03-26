import React from 'react'

function PricingCard() {
  return (
    <div className="">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="border rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold">Basic</h3>
            <div className="text-md font-semibold">$9.99</div>
            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Feature 1: Lorem ipsum dolor sit amet.</li>
                <li>Feature 2: Officia ab eaque velit aliquid magni.</li>
                <li>Feature 3: Nihil, aliquam iusto libero ad fuga.</li>
            </ul>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="border rounded-2xl p-6 space-y-4 bg-gray-700 text-white shadow-lg scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold">Pro</h3>
            <div className="text-md font-semibold">$19.99</div>
            <ul className="list-disc pl-4 space-y-2">
                <li>Feature 1: Lorem ipsum dolor sit amet.</li>
                <li>Feature 2: Officia ab eaque velit aliquid magni.</li>
                <li>Feature 3: Nihil, aliquam iusto libero ad fuga.</li>
            </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="border rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold">Enterprise</h3>
            <div className="text-md font-semibold">$29.99</div>
            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Feature 1: Lorem ipsum dolor sit amet.</li>
                <li>Feature 2: Officia ab eaque velit aliquid magni.</li>
                <li>Feature 3: Nihil, aliquam iusto libero ad fuga.</li>
            </ul>
            </div>
        </div>
    </div>

  )
}

export default PricingCard