/* ================= CREATE NEW POST ================= */

let form = document.getElementById("postForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    let title = document.getElementById("title").value;

    let author = document.getElementById("author").value;

    let content = document.getElementById("content").value;


    /* Check empty fields */

    if (
        title.trim() === "" ||
        author.trim() === "" ||
        content.trim() === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    /* Create new article */

    let post = document.createElement("article");

    post.className = "post";


    post.innerHTML = `

        <p class="post-category">
            NEW ARTICLE
        </p>

        <h3>
            ${title}
        </h3>

        <p class="post-author">
            By <b>${author}</b>
        </p>

        <p>
            ${content}
        </p>

        <button onclick="deletePost(this)">
            DELETE ARTICLE
        </button>

    `;


    /* Add article to blog */

    document.getElementById("posts").appendChild(post);


    /* Clear form */

    form.reset();


    /* Show message */

    alert("Article published successfully!");


    /* Scroll to article */

    post.scrollIntoView({
        behavior: "smooth"
    });

});


/* ================= READ MORE ================= */

function readMore(button) {

    let content = button.nextElementSibling;


    if (content.style.display === "block") {

        content.style.display = "none";

        button.innerText = "READ MORE";

    }

    else {

        content.style.display = "block";

        button.innerText = "READ LESS";

    }

}


/* ================= DELETE POST ================= */

function deletePost(button) {

    let post = button.parentElement;

    post.remove();

}


/* ================= WATCH BUTTON ================= */

function showWatch(watchName) {

    alert(
        "You selected: " +
        watchName +
        "\n\nMore information about this timepiece coming soon!"
    );

}