import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import dynamic from 'next/dynamic'
import { useEffect, useState as useReactState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const BeamsBackground = dynamic(() => import('../ui/beams-background').then(m => m.BeamsBackground), { ssr: false });

export function HeroSection() {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [response, setResponse] = useState<string|null>(null);
    const [error, setError] = useState<string|null>(null);
    const [isDesktop, setIsDesktop] = useReactState(false);
    const [reduceMotion, setReduceMotion] = useReactState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 1024);
        setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setResponse(null);
        try {
            const res = await fetch('https://api.xposefinder.com/public/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                setResponse(data.message);
            } else if (data.details && Array.isArray(data.details) && data.details[0]?.msg) {
                setError(data.details[0].msg);
            } else {
                setError(data.message || 'Submission failed.');
            }
        } catch {
            setError('Submission failed.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {isDesktop && !reduceMotion && <BeamsBackground />}
            <div
                aria-hidden
                className="z-[2] pointer-events-none absolute inset-0 isolate hidden contain-strict opacity-50 lg:block"
            >
                <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="absolute left-0 top-0 h-[80rem] w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="absolute left-0 top-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <div className="relative pt-24 md:pt-36">
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 size-full"
                />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                            <h1 className="mx-auto mt-8 max-w-4xl text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
                                Exposed Data?
                                <br />
                                <span className="text-primary font-normal mt-6 block">Find It. Fix It. Fast.</span>
                            </h1>
                            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                Xposefinder helps you discover exposed data linked to your brand, employees, or customers — with pinpoint accuracy and actionable insights.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                        >
                                    <div
                                        key={1}
                                className="bg-foreground/10 rounded-[14px] border p-0.5"
                            >
                                        <Button
                                            size="lg"
                                    className="rounded-xl px-5 text-base cursor-pointer"
                                    onClick={() => setShowEmailModal(true)}
                                >
                                            <span className="text-nowrap text-white">
                                                Get Free Report
                                            </span>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        size="lg"
                                        variant="ghost"
                                className="h-10.5 rounded-xl px-5"
                                onClick={() => {
                                    const el = document.querySelector('#contact');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                        <span className="text-nowrap hover:text-white">
                                            Schedule a Call
                                        </span>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                    }}
                >
                            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20 flex justify-center">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl overflow-hidden rounded-2xl border p-2 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-[15/7] w-full h-auto rounded-2xl object-cover"
                                        src="./cover.png"
                                        alt="app screen"
                                        width={2000}
                                        height={1440}
                                        priority
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                {showEmailModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <div className="bg-background rounded-lg shadow-lg p-6 w-full max-w-md relative">
                            <button
                                className="absolute top-2 right-2 text-xl text-muted-foreground hover:text-foreground"
                                onClick={() => { setShowEmailModal(false); setEmail(''); setResponse(null); setError(null); }}
                                aria-label="Close"
                            >
                                ×
                            </button>
                            <h2 className="text-2xl font-bold mb-2">Get Your Free Report</h2>
                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border border-input rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    By submitting, you agree to our privacy policy.<br />
                                    We&apos;ll never share your information.
                                </p>
                                {error && <div className="text-destructive text-sm">{error}</div>}
                                {response && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
                                        className="flex flex-col items-center gap-2 my-2"
                                    >
                                        <CheckCircle className="w-10 h-10 text-green-500 animate-pulse" />
                                        <span className="text-green-600 font-semibold text-base">Report sent</span>
                                    </motion.div>
                                )}
                                <Button type="submit" className="w-full text-white" disabled={submitting}>
                                    {submitting ? 'Submitting...' : 'Submit'}
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
        </section>
    )
}