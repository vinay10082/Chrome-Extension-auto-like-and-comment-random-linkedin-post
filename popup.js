const like = document.querySelector('.like-btn');
const comment = document.querySelector('.comment-btn');

like.addEventListener('click', function() {
    var like_count = document.querySelector('#like-count').value;

    chrome.tabs.query({ active:true, currentWindow: true},(tabs) =>{
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: likeOnPost,
            args: [like_count]
        });

    });

});

function likeOnPost(count) {

    var like_count = `${count}`

    console.log(like_count)

    document.querySelector(".artdeco-button__text .react-button__text\n            ").click();
}

comment.addEventListener('click', function() {
    var comment_count = document.querySelector('#comment-count').value;
    console.log(comment_count);
    chrome.tabs.query({ active:true, currentWindow: true},(tabs) =>{
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: commentOnPost,
            args: [comment_count]
        });

    });
    
});


function commentOnPost(count) {

    var comment_count = `${count}`

        console.log(comment_count)

            document.querySelector(".ql-editor").innerHTML="<p>I am testing my bot.Please! ignore comment</p>";
            setTimeout(() => {
                document.querySelector(".comments-comment-box__submit-button").click();
            }, 1000);

}