import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function ShimmerDemoPage() {
    return (
        <div className="z-10 flex min-h-screen items-center justify-center bg-gray-900">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Shimmer Button
                </span>
            </ShimmerButton>
        </div>
    );
}
