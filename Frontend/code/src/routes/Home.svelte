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