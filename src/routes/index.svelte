<script lang="ts">
	import { goto } from '$app/navigation';
	let name = '';
	let email = '';
	let message = '';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Sarita Karale | Portfolio</title>
	<meta name="title" content="Sarita Karale | Portfolio" />
	<meta
		name="description"
		content="Sarita karale is a frontend developer working with angular, ReactJS and Ionic to build awesome enterprise grade web apps."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sarita.vercel.app/" />
	<meta property="og:title" content="Sarita Karale | Portfolio" />
	<meta
		property="og:description"
		content="Sarita karale is a frontend developer working with angular, ReactJS and Ionic to build awesome enterprise grade web apps."
	/>
	<meta property="og:image" content="/preview.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://sarita.vercel.app/" />
	<meta property="twitter:title" content="Sarita Karale | Portfolio" />
	<meta
		property="twitter:description"
		content="Sarita karale is a frontend developer working with angular, ReactJS and Ionic to build awesome enterprise grade web apps."
	/>
	<meta property="twitter:image" content="/preview.png" />
</svelte:head>

<section class="text-gray-600 body-font w-screen mx-auto max-w-7xl ">
	<div class="w-full m-0 flex px-5 py-24 justify-center md:flex-row flex-col items-center" id="top">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="/web-developer.gif"
				width="400"
			/>
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">Sarita Karale</h1>
			<h2 class="text-2xl text-emerald-600 font-semibold">
				<span class="text-yellow-600">function</span> <span class="text-green-600">mySkills</span>
				<span class="text-orange-600">=&gt;</span> <span class="text-yellow-600">&lbrace;</span>
				"Angular", "React", "Javascript", "Python"...
				<span class="text-yellow-600">&rbrace;</span>
			</h2>
			<p class="leading-relaxed">
				A passionate computer engineer and software developer, interested in frontend technologies.
				Looking forward to work with great people and build cool stuff for the world.
			</p>
			<div class="flex w-full gap-4 py-6 px-2 justify-center lg:justify-start">
				<a
					href="tel:+919130764955"
					class="p-2 rounded-full shadow-md text-indigo-700 hover:shadow-lg hover:bg-indigo-700 hover:text-white hover:shadow-indigo-500 transition-all duration-200 cursor-pointer"
					><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
						/>
					</svg></a
				>
				<a
					href="mailto:karalesarita08@gmail.com"
					class="p-2 rounded-full shadow-md text-red-500 hover:shadow-lg hover:bg-red-500 hover:text-white hover:shadow-red-500 transition-all duration-200 cursor-pointer"
					><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
					</svg>
				</a>
				<a
					href="https://linkedin.com/in/saritakarale"
					class="p-2 rounded-full shadow-md text-blue-500 hover:shadow-lg hover:bg-blue-500 hover:text-white hover:shadow-blue-500 transition-all duration-200 cursor-pointer"
					><svg class="h-5 w-5" viewBox="0 0 25 25" fill="currentColor"
						><path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/></svg
					>
				</a>
				<a
					href="https://github.com/karale-sarita"
					class="p-2 rounded-full shadow-md text-slate-700 hover:shadow-lg hover:bg-slate-700 hover:text-white hover:shadow-slate-700 transition-all duration-200 cursor-pointer"
					><svg class="h-5 w-5" viewBox="0 0 25 25" fill="currentColor"
						><path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					>
				</a>
			</div>
			<div class="btn-group">
				<button
					class="btn btn-active"
					on:click={() => {
						goto('#contact');
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mx-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>Lets connect</button
				>
				<button
					class="btn"
					on:click={() => {
						goto('/sarita_cv.pdf');
					}}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mx-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						/>
					</svg> Download CV</button
				>
			</div>
		</div>
	</div>

	<div class="w-full flex-col md:flex-row flex p-8 max-w-7xl justify-center">
		<div class="p-4 md:w-1/3">
			<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
				<div class="flex items-center mb-3">
					<div
						class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
					>
						<svg
							fill="currentColor"
							stroke="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
							><title>Angular</title><path
								d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"
							/></svg
						>
					</div>
					<h2 class="text-gray-900 text-lg title-font font-medium">Angular developer</h2>
				</div>
				<div class="flex-grow">
					<p class="leading-relaxed text-base">
						Built enterprise web apps with angular ionic, firebase and restfull stack.
					</p>
				</div>
			</div>
		</div>
		<div class="p-4 md:w-1/3">
			<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
				<div class="flex items-center mb-3">
					<div
						class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
					>
						<svg
							fill="currentColor"
							stroke="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
							/></svg
						>
					</div>
					<h2 class="text-gray-900 text-lg title-font font-medium">ReactJS</h2>
				</div>
				<div class="flex-grow">
					<p class="leading-relaxed text-base">
						Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
						indxgo juice poutine.
					</p>
				</div>
			</div>
		</div>
		<div class="p-4 md:w-1/3">
			<div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
				<div class="flex items-center mb-3">
					<div
						class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
					>
						<svg
							fill="currentColor"
							stroke="None"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
							><path
								d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
							/></svg
						>
					</div>
					<h2 class="text-gray-900 text-lg title-font font-medium">Javascript</h2>
				</div>
				<div class="flex-grow">
					<p class="leading-relaxed text-base">
						Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
						indxgo juice poutine.
					</p>
				</div>
			</div>
		</div>
	</div>

	<section class="text-gray-600 body-font">
		<h1 class="text-3xl text-slate-800 text-center font-bold">My experience</h1>
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<div class="lg:w-1/2 w-full mb-10 lg:mb-0 p-8 rounded-lg overflow-hidden">
				<img alt="feature" class="object-cover object-center h-full w-full" src="/exp.gif" />
			</div>
			<div
				class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
			>
				<div class="flex flex-col mb-10 lg:items-start items-center">
					<div
						class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<div class="flex-grow">
						<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
							HTS Tech Solutions, Pune, Feb 2021 - Current
						</h2>
						<p class="leading-relaxed text-base">
							Working as a frontend web developer. Building web apps with <b>ReactJS</b>,
							<b>Angular</b>. Resolving issues raised by testers on the <b>Jira.</b>
						</p>
					</div>
				</div>
				<div class="flex flex-col mb-10 lg:items-start items-center">
					<div
						class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<div class="flex-grow">
						<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
							Nethuts, Sept 2020 - Nov 2020
						</h2>
						<p class="leading-relaxed text-base">
							Worked as web developer intern remotely. Built web apps with react and php.
						</p>
					</div>
				</div>
				<div class="flex flex-col mb-10 lg:items-start items-center">
					<div
						class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
							/>
						</svg>
					</div>
					<div class="flex-grow">
						<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
							Computer Engineer, Jun 2017 - Jun 2021
						</h2>
						<p class="leading-relaxed text-base">
							Passed with <b>8.64 SGPA</b> from SPPU,Pune. Volunteered for DSC under Google developer
							group to host training programms for students.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="text-gray-600 body-font relative" id="contact">
		<div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
			<div
				class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19044.414903253957!2d73.85850447023593!3d18.444778041139788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eadb710f2b39%3A0x7c7da231390d6dda!2sKatraj%20Bus%20Stop!5e1!3m2!1sen!2sin!4v1657309149109!5m2!1sen!2sin"
					width="100%"
					height="100%"
					class="absolute inset-0"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="no"
					loading="lazy"
					style="filter: grayscale(1) contrast(1.2) opacity(0.6);"
					referrerpolicy="no-referrer-when-downgrade"
				/>
				<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
					<div class="lg:w-1/2 px-6">
						<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
						<p class="mt-1">Currently working in pune. Looking for new opportunities.</p>
					</div>
					<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
						<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
						<a class="text-indigo-500 leading-relaxed" href="mailto:karalesarita08@gmail.com"
							>karalesarita08@gmail.com</a
						>
						<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
							PHONE
						</h2>
						<a class="text-indigo-500" href="tel:+919130764955">+91 9130764955</a>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
				<h2 class="text-gray-900 text-lg mb-1 font-medium title-font" id="">Contact me</h2>
				<p class="leading-relaxed mb-5 text-gray-600">
					Get in touch, I would like to meat great developers
				</p>
				<div class="relative mb-4 p-1">
					<label class="label" for="name">
						<span class="label-text">Name</span>
					</label>
					<input
						type="text"
						name="name"
						bind:value={name}
						required
						placeholder="Name"
						class="input input-primary input-bordered w-full "
					/>
				</div>
				<div class="relative mb-4 p-1">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						type="text"
						name="email"
						bind:value={email}
						required
						placeholder="Email"
						class="input input-primary input-bordered w-full "
					/>
				</div>
				<div class="relative mb-4 p-1">
					<label class="label" for="message">
						<span class="label-text">Message</span>
					</label>
					<textarea
						type="text"
						name="message"
						bind:value={message}
						placeholder="Type here"
						class="textarea input-primary input-bordered w-full "
						required
					/>
				</div>
				<button
					class="btn btn-primary btn-block"
					on:click={() => {
						fetch('https://formsubmit.co/ajax/karalesarita08@gmail.com', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Accept: 'application/json'
							},
							body: JSON.stringify({
								_subject: "sarita's portfolio's contact form",
								_cc: 'dhirajraje113@gmail.com',
								_autoresponse:
									"Thanks for reaching out to sarita, she'll get back to you as soon as possible",
								_template: 'table',
								name: name,
								email: email,
								message: message
							})
						}).then((data) => {
							name = '';
							email = '';
							message = '';
							alert('Successfully sent.');
						});
					}}>Send message</button
				>
			</div>
		</div>
	</section>
</section>

<footer class="text-gray-600 mx-auto border-t-2 max-w-7xl body-font">
	<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
		<a
			href="#top"
			class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
				/>
			</svg>
			<span class="ml-3 text-xl">Sarita Karale</span>
		</a>
		<p
			class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
		>
			© 2022 Portfolio —
			<a
				href="https://linkedin.com/in/saritakarale"
				class="text-gray-600 ml-1"
				rel="noopener noreferrer"
				target="_blank">@saritakarale</a
			>
		</p>
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<a class="ml-3 text-gray-500" href="https://linkedin.com/in/saritakarale">
				<svg
					fill="currentColor"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="0"
					class="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path
						stroke="none"
						d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
					/>
					<circle cx="4" cy="4" r="2" stroke="none" />
				</svg>
			</a>
		</span>
	</div>
</footer>
