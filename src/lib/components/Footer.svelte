<script>
    import { base } from '$app/paths';
    import GitHub from '$lib/assets/GitHub2.png';
    import LinkedIn from '$lib/assets/LinkedIn.png';
  </script>
  
<style>
.footer {
    background-color: var(--background-color2);
    color: var(--text-color-1);
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
.footer-text {
    font-size: 1rem;
}
.footer-links {
    gap: 1rem;
}
.footer-links img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
</style>

<div class="footer vertical-layout center-all">
    <div class="footer-text">
        &copy; {new Date().getFullYear()} Juho Hietala
    </div>
    <div class="footer-links center-all">
        <a href="https://github.com/JuhoHackspace" target="_blank" rel="noopener noreferrer">
        <img src={`${base}${GitHub}`} alt="GitHub Profile" />
        </a>
        <a href="https://www.linkedin.com/in/juho-hietala-92a4b52b8" target="_blank" rel="noopener noreferrer">
        <img src={`${base}${GitHub}`} alt="LinkedIn Profile" />
        </a>
    </div>
</div>
