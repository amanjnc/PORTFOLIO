import React from "react";
import Button from "./Button";
import { SOCIAL_MEDIA, REPO_LINK, RESUME_LINK, ABOUT_ME } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
	<footer id='contact' className='bg-secondaryLinear sm:px-16 px-6'>
		<div
			className={`flex md:flex-row flex-col-reverse py-6 xl:max-w-[1280px] w-full mx-auto gap-y-4 items-center justify-center`}
		>
			<div
				className={
					"md:flex-1 flex-col flex justify-center items-center md:items-start"
				}
			>
				<h2 className='text-xl font-bold font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300'>
					{ABOUT_ME.name}
				</h2>
				<p
					className={`font-poppins font-normal text-center md:text-left text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
				>
					{ABOUT_ME.tagLine}
				</p>
				<div className='flex flex-row mt-4 items-center'>
					{" "}
					{/* Added items-center for vertical alignment */}
					{SOCIAL_MEDIA.map((social) => (
						<a
							href={social.link}
							target='_blank'
							rel='noopener noreferrer' // Added for security
							key={social.id}
							className='mr-5 text-[25px] hover:text-[#F5F9FD] flex items-center' // Added flex and items-center
						>
							{social.icon === faTelegram ? (
								<FontAwesomeIcon icon={social.icon} className='h-6 w-6' /> // Set a consistent height and width
							) : (
								React.createElement(social.icon, { className: "h-6 w-6" }) // Set a consistent height and width
							)}
						</a>
					))}
				</div>

				<div className='grid grid-cols-2'>
					<a href={RESUME_LINK} target='_blank' rel='noopener noreferrer'>
						<Button styles='mt-10 mr-3' text='Resume' icon='AiFillGithub' />
					</a>
					<a href={REPO_LINK} target='_blank' rel='noopener noreferrer'>
						<Button
							styles='mt-10 inline-flex items-center justify-center'
							text='Star'
							icon={AiFillGithub}
						/>
					</a>
				</div>
			</div>

			<div className='mt-10 md:mt-0'>
				<img
					src='https://imgur.com/DlY6sUM.png'
					alt='Amanuel Beyene'
					className='w-[210px] h-[200px] border-2 border-dark_primary relative z-[5] rounded-full'
				/>
			</div>
		</div>
	</footer>
);

export default Footer;
