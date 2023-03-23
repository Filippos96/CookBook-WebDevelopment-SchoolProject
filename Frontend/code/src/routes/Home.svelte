<script>

    let comment = ""

    let showHowTo = { show: false };

    let showCommentSection = { see: true }

    function toggleShowHowTo() {
        showHowTo.show = !showHowTo.show;
    }

    function toggleCommentSection() {
        showCommentSection.see = !showCommentSection.see;
    }

    function postCommment() {

    }

    import { fade } from 'svelte/transition';
    

</script>

<div class="main-page">
    <div class="header">
        <h2>Welcome to CockBock</h2>
    </div>
    
    <div class="feed">
        <!-- Post 1 -->
        <div class="profile">
            <div class="profile-img">
                <img src="/public/donut.jpg" alt="">
            </div>
            KraZzez
        </div>
        <div class="post">
            <img src="/public/donut.jpg" alt="">
            <div class="post-buttons">
                <div class="left-buttons">
                    <i class="fa-regular fa-heart"></i>
                    <button on:click={toggleCommentSection}>
                        <i class="fa-regular fa-comment"></i>
                    </button>
                </div>
                <button on:click={toggleShowHowTo}>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                
            </div>
            {#if showHowTo.show}
            <div transition:fade>
                <div class="description">
                    <div class="ingrdients">
                        <h2>Ingredients</h2>
                        <div class="ingredients-content">
                            <ul>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                            </ul>
                        
                        </div>
                    </div>
                    <div class="instructions">
                        <h2>Instructions</h2>
                        <div class="instruction-content">
                            <ol type="1">
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/if}
            <div class="new-comment">
                <i class="fa-regular fa-face-smile-wink"></i>
                <span><input bind:value={comment} placeholder="Add a comment"></span>
                <button on:click={postCommment}>
                    Post
                </button>
            </div>
        </div> 

        <!-- Post 2 -->
        <div class="profile">
            <div class="profile-img">
                <img src="/public/donut.jpg" alt="">
            </div>
            Filipinator
        </div>
        <div class="post">
            <img src="/public/donut.jpg" alt="">
            <div class="post-buttons">
                <div class="left-buttons">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                </div>
                <button on:click={toggleShowHowTo}>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                
            </div>
            {#if showHowTo.show}
            <div transition:fade>
                <div class="description">
                    <div class="ingrdients">
                        <h2>Ingredients</h2>
                        <div class="ingredients-content">
                            <ul>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                                <li>Mat Grejer</li>
                            </ul>
                        
                        </div>
                    </div>
                    <div class="instructions">
                        <h2>Instructions</h2>
                        <div class="instruction-content">
                            <ol type="1">
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                                <li>Do like this</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/if}
            {#if showCommentSection.see}
            <div class="comment-section">
                <!-- Comment 1 -->
                <div class="comment">
                    <h4>KraZzez</h4>
                    <div class="comment-content">
                        I like donuts
                    </div>
                </div>
                <!-- Comment 2 -->
                <div class="comment">
                    <h4>KraZzez</h4>
                    <div class="comment-content">
                        I like donuts
                    </div>
                </div>
                <!-- Comment 3 -->
                <div class="comment">
                    <h4>KraZzez</h4>
                    <div class="comment-content">
                        I like donuts
                    </div>
                </div>
            </div>
            {/if}
            <div class="new-comment">
                <i class="fa-regular fa-face-smile-wink"></i>
                <span><input bind:value={comment} placeholder="Add a comment"></span>
                <button on:click={postCommment}>
                    Post
                </button>
            </div>
        </div> 
    </div>
    <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
        <svg viewBox="0 0 577 310" aria-hidden="true" class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
          <path id="1d77c128-3ec1-4660-a7f6-26c7006705ad" fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)" fill-opacity=".3" d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z" />
          <defs>
            <linearGradient id="49a52b64-16c6-4eb9-931b-8e24bf34e053" x1="614.778" x2="-42.453" y1="26.617" y2="96.115" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
        <svg viewBox="0 0 577 310" aria-hidden="true" class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
          <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
        </svg>
        <div class="flex flex-wrap items-center gap-y-2 gap-x-4">
          <p class="text-sm leading-6 text-gray-900">
            <strong class="font-semibold">GeneriCon 2023</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a href="#" class="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></a>
        </div>
        <div class="flex flex-1 justify-end">
          <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span class="sr-only">Dismiss</span>
            <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
</div>



<style>

    .main-page {
        padding-top: 20px;
    }

    button {
        outline: none;
        background: #fff;
        color: black;
        padding: 0;
    }

    button:hover {
        border-color: none;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
    }

    .profile {
        display: flex;
        align-items: center;
        background: #286052;
        padding: 5px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }

    .profile-img {
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #e2336b;
        align-items: center;
        justify-content: center;
        background: #fff;
        margin-right: 10px;
    }

    .profile img {
        width: 35px;
        height:35px;
        object-fit: cover;
        border-radius: 50%;
        object-position: center;
    }

    .feed {
        width: 800px;
        margin-left: 180px;
    }

    .post img {
        width: 798px;
        height: 350px;
        object-fit:contain;
        background: white;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }

    .description {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-top: 5px solid #286052;
        color: #000;
        padding:5px;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }

    .description h2 {
        font-weight: bold;
    }

    .post-buttons {
        display: flex;
        justify-content: space-between;
        padding: 5px 5px;
        background: #fff;
        border-top: 5px solid #286052;
        margin-top: -6px;
        color: #000;
        align-items: center;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }

    .post-buttons button {
        padding-right: 15px;
    }

    .left-buttons i {
        padding: 5px;
    }

    i {
        font-size: larger;
    }

    .new-comment {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        background: #286052;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 60px;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
    }

    .new-comment input {
        width: 690px;
        height: 30px;
        border: none;
        background: #286052;
        margin-top: 3px;
    }

    .new-comment input:focus {
        outline: none;
    }

    .new-comment button {
        background: #286052;
        color: #fff;
    }

    .comment-section {
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }

    .comment {
        color: #000;
        border-top: 1px solid #000;
        padding: 10px;
    }

</style>