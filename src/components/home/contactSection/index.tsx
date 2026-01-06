"use client"

import SectionHeading from '@/components/commonComponents/sectionHeading'
import Link from 'next/link'
import React, { useState } from 'react'
import LinkItemWrapper from '../aboutSection/linkItemWrapper'
import LinkedIcon from '@/components/icons/linkedIcon'

function ContactSection() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {

    }
    return (
        <div id='contact' className='max-width flex flex-col justify-center items-center gap-[100px]'>
            <SectionHeading heading={`Let's talk`} />
            <div className='w-full flex-col gap-[100px]'>
                <div className='flex flex-col justify-center items-center gap-[10px]'>
                    <Link href={`mailto:jatinbhall36111@gmail.com`}
                        className='text-[30px] sm:text-[38px] leading-[45px] text-primaryText font-light hover:underline'>jatinbhall36111@gmail.com</Link>
                    {/* Links */}
                    <div className='flex justify-center gap-4 max-md:mx-auto'>
                        <LinkItemWrapper href='https://www.linkedin.com/in/jatin-bhall-50715520a/'>
                            <LinkedIcon className='max-w-6 max-h-6 text-primaryText' />
                        </LinkItemWrapper>
                    </div>
                </div>
            </div>  
            {/* form */}
            <form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-4 max-md:p-4'>
                <input
                    className='max-md:col-span-2 max-h-[50px] rounded-2xl border-2 box-border focus:outline-none focus:border-[#8774ff] border-primaryText leading-6 text-xl p-4'
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                    type='text' />
                <input
                    className='max-md:col-span-2 max-h-[50px] rounded-2xl border-2 box-border focus:outline-none focus:border-[#8774ff] border-primaryText leading-6 text-xl p-4'
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    type='email' />
                <textarea
                    className='col-span-2 rounded-2xl border-2 box-border focus:outline-none focus:border-[#8774ff] border-primaryText leading-6 text-xl p-4'
                    placeholder="Message"
                    rows={3}
                    value={message}
                    onChange={handleMessageChange}
                />
                <button
                    className="col-span-2 h-10 w-full bg-primaryText text-white rounded-2xl text-xl leading-5 cursor-pointer hover:opacity-90 transition-opacity duration-[200ms]"
                    type="submit"
                >
                    Send
                </button>
            </form>

        </div>
    )
}

export default ContactSection