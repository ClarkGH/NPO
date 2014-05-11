$(document).ready( function(){
    var postView = new PostView()
    var blog = new Blog( postView )
    blog.bindEventListeners()
})

function Blog( postView ) {
    this.postView = postView
}

Blog.prototype = {
    bindEventListeners: function(){
        $('.deena, .jennifer, .rachel').on( 'click', this.getAuthorPosts.bind( this ) )
   },

    getAuthorPosts: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })

        ajaxRequest.done( this.postView.displayAuthorPosts.bind( this )  )
    }
}

function PostView(){
}

PostView.prototype = {
    displayAuthorPosts: function( data ){
        event.preventDefault()
        this.postView.getPostTemplate( data )
    },

    getPostTemplate: function( data ){
        $.get( 'templates/post_template.mst', function( template ){
            console.log( data )
            var rendered = Mustache.render( template, data )
            console.log ( rendered )
        })
    }
}
