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
        $('a.login, a.edit, a.delete, a.create').on( 'click', this.getPartial.bind( this ) )
   },

    getAuthorPosts: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })
        ajaxRequest.done( this.postView.displayPost.bind( this.postView )  )
    },

    getPartial: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })

        ajaxRequest.done( this.postView.displayPartial )
    },
}

function PostView(){
}

PostView.prototype = {
    getPostTemplate: function(){
        return $('#post-template').html()
    },

    displayPost: function( postData ){
        var mustacheData = { data: postData }
        var template = this.getPostTemplate()
        var rendered = Mustache.render( template, mustacheData )
        $('.container').html( rendered )
    },

    displayPartial: function( partial ){
        $('.container').html( partial )
    }
}
