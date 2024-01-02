"use client"

import { AiFillHeart } from "react-icons/ai"
import { ImMusic } from "react-icons/im"
import Link from "next/link"
import { useEffect } from "react"
import PostMainLikes from "./PostMainLikes"
import useCreateBucketUrl from "../hooks/useCreateBucketUrl"
import { PostMainCompTypes } from "../types"

export default function PostMain({ post }: PostMainCompTypes) {

    useEffect(() => {
        const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement
        const postMainElement = document.getElementById(`PostMain-${post.id}`);

        if (postMainElement) {
            let observer = new IntersectionObserver((entries) => {
                entries[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] });
        
            observer.observe(postMainElement);
        }
    }, [])

    return (
        <>
            <div id={`PostMain-${post.id}`} className="flex border-b py-6">

                <div className="cursor-pointer">
                    <img className="rounded-full max-h-[60px]" width="60" src={useCreateBucketUrl(post?.profile?.image)} />
                </div>

                <div className="pl-3 w-full px-4">
                    <div className="flex items-center justify-between pb-0.5">
                        <Link href={`/profile/${post.profile.user_id}`}>
                            <span className="font-bold hover:underline cursor-pointer">
                                {post.profile.name}
                            </span>
                        </Link>
                    </div>

                    <div className="mt-2.5 flex">
                        <div
                            className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer"
                        >
                            <video 
                                id={`video-${post.id}`}
                                loop
                                controls
                                muted
                                className="rounded-xl object-cover mx-auto h-full" 
                                src={useCreateBucketUrl(post?.video_url)}
                            />
                            <img 
                                className="absolute right-2 bottom-10" 
                                width="90" 
                                src="/images/tiktok-logo-white.png"
                            />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}
