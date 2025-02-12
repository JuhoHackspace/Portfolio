<script>
    import { onMount } from 'svelte';
    import picture from '$lib/assets/kuva.jpg';
    import skills from '$lib/assets/skills.js';
    import Skill from '$lib/components/Skill.svelte';
</script>
<style>
    .image-container {
        width: 50%;
        margin-bottom: 1em;
    }
    img {
        width: 400px;
        object-fit: contain;
        border-radius: 50%;
        margin-left: 1em;
    }
    #slogan {
        font-style: italic;
        margin-top: 0.5em;
        font-size: 1.5em;
    }
    .link {
        font-size: 1.5em;
        color: blue;
        width: max-content;
    }
    .link:hover {
        color: darkblue;
        font-weight: bold;
    }
    @media (max-width: 900px) {
        .image-container {
            width: 100%;
        }
        img {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }
        .name {
            margin-top: 1em;
        }
    }   
</style>
<div class="container">
    <div class="vertical-layout center-all">
        <div class="image-container center-all">
            <img src={picture} alt="Placeholder" />
        </div>
        <div class="vertical-layout max-width-600 text-center center-all">
            <h1 class="header name">Juho Hietala</h1>
            <h3 id="slogan">"Code with Passion, Deliver with Precision"</h3>
            <p class="intro-text inner-2em">
                I am a third-year ICT engineering student specializing in software development. As a problem solver and enthusiastic learner, I thrive on challenges and continuously seek to expand my knowledge. I am dedicated to searching, applying, and implementing innovative solutions.
                I have worked on various projects, including web, mobile, and desktop applications. I am also interested in databases and have experience in creating and managing them. I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on exciting projects and collaborate with talented people.
            </p>
            <a href="/myWork" class="link">See My Work</a>
            {#each skills as skill}
            <Skill title={skill.name} tags={skill.tags}/>
            {/each}
        </div>
    </div>
</div>
