import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Example() {
    return (
        <div className="overflow-hidden bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Buy Crypto</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">In simple steps</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Experience the best of Web3 using Transfi. We’re available in many countries, creating the easiest buying experience for crypto. Think of us as the express checkout for the crypto world.
                            </p>
                        </div>
                    </div>
                    <iframe src="https://sandbox-buy.transfi.com/" title="W3Schools Free Online Web Tutorials" width={500}
                        height={700}></iframe>

                </div>
            </div>
        </div>
    )
}
