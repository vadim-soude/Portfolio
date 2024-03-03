<script>

	let languages = [
		{ alt:"Java", src:"https://abrudz.github.io/logos/Java.svg"},
		{ alt:"CSharp", src:"https://abrudz.github.io/logos/CSharp.svg" },
		{ alt:"TypeScript",src:"https://abrudz.github.io/logos/TypeScript.svg" },
		{ alt:"Svelte",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" },
		{ alt:"Python",src:"https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png" },
		{ alt:"PHP",src:"https://abrudz.github.io/logos/PHP.svg" },
		{ alt:"JavaScript",src:"https://abrudz.github.io/logos/JS.svg" },
		{ alt:"HTML",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" },
		{ alt:"CSS",src:"https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" },
		{ alt:"SQL",src:"https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png" },
		{ alt:"OpenGL",src:"https://conclase.net/imagen/blog/glut/opengl.jpg" },
		{ alt:"Redis",src:"https://cdn.icon-icons.com/icons2/2415/PNG/512/redis_plain_logo_icon_146366.png" },
		{ alt:"MongoDB",src:"https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" },
		{ alt:"Markdown",src:"https://cdn.icon-icons.com/icons2/2389/PNG/512/markdown_logo_icon_145085.png" },
		{ alt:"Android",src:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-icon.png" },
	];

	let outils = [
		{ alt:"Git",src:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"},
		{ alt:"Docker",src:"https://cdn-icons-png.flaticon.com/512/919/919853.png" },
		{ alt:"Traefik",src:"https://store-images.s-microsoft.com/image/apps.51659.5299f884-37d4-4da1-b02e-216ff948898a.2d272a75-4775-4ca0-8e19-0dea6fcc93af.71a66afc-6008-4aaf-a91c-5f07080e3a8f" },
		{ alt:"Wireguard",src:"https://static-00.iconduck.com/assets.00/wireguard-icon-2048x2048-6w5jtt33.png" },
		{ alt:"Jenkins",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/jenkins_logo_icon_170552.png" },
		{ alt:"Gitea",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gitea_Logo.svg/2048px-Gitea_Logo.svg.png" },
		{ alt:"Maven",src:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_maven_icon_130397.png" },
		{ alt:"Gradle",src:"https://cdn.icon-icons.com/icons2/2389/PNG/512/gradle_logo_icon_145224.png" },
		{ alt:"NodeJS",src:"https://ezerus.com.au/wp-content/uploads/2019/05/nodejs-square-200.png" },
		{ alt:"MantisBT",src:"https://media.trustradius.com/product-logos/1O/oc/L05H5FTHDT4N-180x180.PNG" },
		{ alt:"Grafana",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/grafana_logo_icon_171048.png" },
		{ alt:"Github",src:"https://cdn-icons-png.flaticon.com/512/25/25231.png" },
		{ alt:"PhpMyAdmin",src:"https://miro.medium.com/v2/resize:fit:1400/1*5Hnnv0awfSv0BGcq1C522w.png" },
		{ alt:"Nginx",src:"https://gilab.rs/wp-content/uploads/2023/09/icons8-nginx-512.png" },
		{ alt:"DrawIO",src:"https://static-00.iconduck.com/assets.00/file-type-drawio-icon-2048x2048-dxjfklgq.png" },

	];

	let framework = [
		{ alt:".NET MVC",src:"https://3.bp.blogspot.com/-RG9k8rjk78k/Wmt_owcUnAI/AAAAAAAAAmE/wNnUeN0rV38cEbEHc-8l_sr7uSmczrLZQCLcBGAs/s1600/73895521.png"},
		{ alt:"Angular",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" },
		{ alt:"PaperMc",src:"https://docs.papermc.io/assets/images/papermc-logomark-512-f125384f3367cd4d9291ca983fcb7334.png"},
		{ alt:".NET Entity Framework",src:"https://greenfinchwebsitestorage.blob.core.windows.net/media/2020/03/Microsoft_Entity-Framework.png" },
		{ alt:"React",src:"https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" },
		{},
		{ alt:"Express",src:"https://cdn.icon-icons.com/icons2/2415/PNG/512/express_original_wordmark_logo_icon_146528.png" },
		{ alt:"Express",src:"https://www.dammio.com/wp-content/uploads/2017/03/jquery-logo.png" },
		{ alt:"Lib GDX", src:"https://libgdx.com/assets/brand/stacked.png"},
		{}
	];

	let elemets = [
		{ tab: "Langages maîtrisés :", content: languages },
		{ tab: "Framework maîtrisés :", content: framework },
		{ tab: "Outils maîtrisés :", content: outils },
		];

	function updateTitle(index, images) {
		images[index].title === images[index].alt;
	}
</script>

<section>
	<h1>Accueil</h1><br><br>
	<span class="text">Bienvenue sur mon portfolio !</span><br>
	<span class="text">Je suis Vadim Soudé, un développeur full stack, passionné par la programmation et les nouvelles technologies.</span><br>
	<span class="text">Major de promo en BUT Informatique option développement d'applications, et je suis actuellement en recherche d'alternance pour un M1 en informatique (IL).</span><br><br><br>

	{#each elemets as { tab, content }}
		<span class="text">{tab}</span>
		<div class="logo-tab">
			{#each content as { src, alt }}
				<div class="logo">
					<img src={src} alt={alt} title={alt}>
				</div>
			{/each}
		</div>
		<br>
		<br>
	{/each}

</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .text {
        font-size: 25px;
        text-align: center;
    }

    .logo-tab {
        width: 60%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px; /* Adjust the spacing between logos */
        margin: 20px;
    }

    .logo {
        width: 100%; /* Adjust the width of each logo */
        height: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: var(--border);
        border: 1px solid var(--border);
    }

    .logo img {
        max-height: inherit;
        max-width: 100%;
        height: auto;
        width: auto;
        object-fit: contain;
    }
</style>