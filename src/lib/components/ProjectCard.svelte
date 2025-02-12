<script>
    export let title;
    export let description;
    export let imageURI = []; // Optional image URI
    export let videoURI = ''; // Optional YouTube video URI
    export let availableOn = [];

    let currentImageIndex = 0;
    
    function openLink(url) {
        window.open(url, '_blank');
    }
    
    import githubLogo from '$lib/assets/GitHub2.png';
    import webLogo from '$lib/assets/Web2.png';
    import Muuvit from '$lib/assets/Muuvit.png';
    import Huiputin1 from '$lib/assets/Huiputin1.jpg';
    import Huiputin2 from '$lib/assets/Huiputin2.jpg';
    import Huiputin3 from '$lib/assets/Huiputin3.jpg';
    import Huiputin4 from '$lib/assets/Huiputin4.jpg';
    import Huiputin5 from '$lib/assets/Huiputin5.jpg';
    import LearningJavaScript from '$lib/assets/LearningJavaScript.jpg';

    // Map names to imported resources
    const platformLogos = {
        GitHub: githubLogo,
        Web: webLogo
    };
    const pictures = {
        Muuvit: Muuvit,
        Huiputin1: Huiputin1,
        Huiputin2: Huiputin2,
        Huiputin3: Huiputin3,
        Huiputin4: Huiputin4,
        Huiputin5: Huiputin5,
        LearningJavaScript: LearningJavaScript
    };

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageURI.length) % imageURI.length;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageURI.length;
    }
</script>
<style>
    .card-container {
        background-color: var(--background-color2);
        border-radius: 0.5em;
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        max-width: 400px;
        min-width: 300px;
        min-height: 800px;
    }
    .card-container:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 640px) {
        .card-container {
            margin: 1em auto;
        }
    }
    .video-picture-container {
        margin: 1em auto;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        position: relative;
    }
    .video-picture-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video-picture-container img {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: contain;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5em;
        position: absolute;
        width: 100%;
        top: 0;
    }
    .button-container button {
        background-color: var(--background-color2);
        color: var(--text-color-1);
        border: none;
        border-radius: 0.5em;
        padding: 0.5em;
        cursor: pointer;
        font-size: 1.5em;
    }
    .button-container button:hover {
        background-color: var(--primary-color);
    }
    .transparent {
        background: transparent;
    }
    .logo {
        width: 30px;
        height: 30px;
        margin: 0.5em;
        cursor: pointer;
        image-rendering: transparent;
    }

</style>
<div class="vertical-layout card-container outer-1em">
    <div class="container vertical-layout">
        <div class="inner-1em">
            <h2 class="header text-center">{title}</h2>
        </div>
        {#if videoURI}
        <div class="video-picture-container">
            <iframe src={videoURI} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {:else}
        <div class="video-picture-container">
            {#if imageURI.length > 0}
                <img src={pictures[imageURI[currentImageIndex]]} alt={title} />
                {#if imageURI.length > 1}
                    <div class="button-container">
                        <button class="slider-button left" on:click={prevImage}>&lt;</button>
                        <button class="slider-button right" on:click={nextImage}>&gt;</button>
                    </div>
                {/if}
            {/if}
        </div>
        {/if}
        <div class="container text-center">
            <p>{description}</p>
        </div>
        {#if availableOn.length > 0}
        <div class="horizontal-layout center-all transparent">
            <h3 class="header outer-05em">Available on</h3>
        {#each availableOn as platform}
            <img class="logo" src={platformLogos[platform.name]} alt={platform.name} on:click={() => openLink(platform.url)}/>
        {/each}
        </div>
        {/if}
    </div>
</div>