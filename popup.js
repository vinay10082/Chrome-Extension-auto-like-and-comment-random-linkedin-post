const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    var like_count = document.querySelector('#like-count').value;
    var comment_count = document.querySelector('#comment-count').value;

    chrome.tabs.update({url: 'https://linkedin.com/'});

    setTimeout(() => {
        chrome.tabs.query({ active:true, currentWindow: true},(tabs) =>{
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: likeandCommentOnPost,
                args: [like_count,comment_count]
           });
        })    
    }, 10000);

})

function likeandCommentOnPost(count1,count2) {

    var like_count = `${count1}`
    console.log(like_count)
    document.querySelector(".artdeco-button__text .react-button__text\n            ").click();

    setTimeout(() => {
        
    }, 10000);

    var comment_count = `${count2}`
    console.log(comment_count)
        document.querySelector(".ql-editor").innerHTML="<p>I am testing my bot.Please! ignore comment</p>";
        setTimeout(() => {
            document.querySelector(".comments-comment-box__submit-button").click();
        }, 1000);
}
