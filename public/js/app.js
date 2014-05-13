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
        ajaxRequest.done( this.getPostTemplate.bind( this )  )
    },

    getPostTemplate: function( postData ){
        var self = this
        var ajaxRequest = $.ajax({
            url: 'templates/post_template.mst?v.0',
            type: 'GET'
        })
        ajaxRequest.done( function( template ){
            self.postView.displayPost( template, postData )
        })
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
    displayPost: function( template, postData ){
        var mustacheData = { data: postData }
        var rendered = Mustache.render( template, mustacheData )
        $('.container').html( rendered )
    },

    displayPartial: function( partial ){
        $('.container').html( partial )
    }
}
