function createPost() {
  let postTitle = document.getElementById('postTitle').value
  let postAuthor = document.getElementById('postAuthor').value
  let postContent = document.getElementById('postContent').value

  let pageTemplate = document.getElementById('page-template').innerHTML
  let postTemplate = document.getElementById('post-template').innerHTML
  let commentsTemplate = document.getElementById('comments-template').innerHTML

  let postTemplateFn = _.template(postTemplate)
  let postSection = postTemplateFn({ postTitle: postTitle, postAuthor: postAuthor, postContent: postContent })

  let pageTemplateFn = _.template(pageTemplate)
  document.querySelector('main').innerHTML += pageTemplateFn({ post: postSection});

  let commentsTemplateFn = _.template(commentsTemplate)
  let commentsSection  = commentsTemplateFn()

  let recentPost = document.querySelector('#post')
  recentPost.querySelector('footer').innerHTML = commentsSection
}

function postComment() {
  let commenterName = document.getElementById('commenterName').value
  let commentText = document.getElementById('commentText').value

  let commentTemplate = document.getElementById('comment-template').innerHTML
  let commentFn = _.template(commentTemplate)

  document.querySelector('#comments').innerHTML += commentFn({ commenter: commenterName, comment: commentText })

}
