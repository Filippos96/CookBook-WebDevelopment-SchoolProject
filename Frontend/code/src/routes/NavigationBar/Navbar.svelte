<script>
    import {Router, Link, Route} from "svelte-routing"
</script>


<!-- Sidebar -->
<div class="sidebar">
    <div class="logo">
        <a href="/">CookBook</a>
    </div>
    <!-- Profile Image -->
    <div class="profile">
        <div class="profile-img">
            <img src="../public/donut.jpg" alt="">
        </div>
        <div class="name">
            <h1>Kraz KraZ</h1>
            <img src="../public/donut.jpg" alt="">
        </div>
        <span>@kraz</span>
    </div>
    <!-- Menu -->
    <div class="menu">
        <Link to="/recipes" class="links">
            <span class="icon">
                <i class="fa-solid fa-house"></i>
            </span>
            Home
        </Link>
        <a href="#/preset">
            <span class="icon">
                <i class="fa-regular fa-image"></i>         
            </span>
            Preset
        </a>
        <a href="#/test">
            <span class="icon">
                <i class="fa-regular fa-circle-question"></i>
            </span>
            About
        </a>
        <a href="#/">
            <span class="icon">
                <i class="fa-regular fa-user"></i>
            </span>
            Profile
        </a>
        <a href="#/">
            <span class="icon">
                <i class="fa-solid fa-gear"></i>
            </span>
            Settings
        </a>
    </div>
</div>

<style>

    .sidebar {
        position:fixed;
        width: 200px;
        height: 100vh;
        background: #86bca8;
        padding: 20px;
        color: black;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo a {
        color: #000;
        font-size: 30px;
    }

    .profile{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1.4rem;
    }

    .profile-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #286052;
        background: #fff;
    }

    .profile-img img {
        width: 70px;
        height:70px;
        object-fit: cover;
        border-radius: 50%;
        object-position: center;
    }
    

    .name {
        display: flex;
        align-items: center;
        margin: 1rem 0 0.4rem;
    }

    .name h1 {
        font-size: 1.1rem;
        color: black;
    }

    .name img {
        margin-left: 4px;
        width: 20px;
        border-radius: 40%;
        object-fit: contain;
    }


    .profile span {
        font-size: 0.938rem;
        font-weight: 400px;
        color: black;
    }

    .menu {
        margin-top: 40px;
    }

    :global(a) {
        width: 100%;
        font-size: 1rem;
        color: #000;
        display: flex;
        align-items: center;
        line-height: 60px;
    }

    :global(a):hover, :global(a) .active{
        color: #286052;
    }

    :global(a):hover::before, :global(a) .active::before {
        content: '';
        position: absolute;
        right: 0;
        width: 2px;
        height: 17px;
        background: #286052;
    }

    .menu a {
        width: 100%;
        font-size: 1rem;
        color: #000;
        display: flex;
        align-items: center;
        line-height: 60px;
    }

    a.links {
        width: 100%;
        font-size: 1rem;
        color: #000;
        display: flex;
        align-items: center;
        line-height: 60px;
    }

    .menu a:hover, .menu .active {
        color: #286052;
    }

    a.links:hover, a.links .active {
        color: #286052;
    }

    .menu .icon {
        margin-right: 1rem;
        font-size: 20px;
    }

    .menu a:hover::before, .menu .active::before {
        content: '';
        position: absolute;
        right: 0;
        width: 2px;
        height: 17px;
        background: #286052;
    }

    .icon i {
        width: 50px;
    }

</style>
